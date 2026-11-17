const express = require('express');
const router = express.Router();
const exercisesData = require('../data/exercises.json');
const redisClient = require('../db/redisClient');

// Helper to normalize answers for comparison
function normalizeAnswer(str) {
  if (!str) return '';
  return str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?'"]/g, '')
    .replace(/\s+/g, ' ');
}

// GET /api/exercises - List exercises (optional level or topic filter)
router.get('/', (req, res) => {
  const { level, topic } = req.query;
  let filtered = [...exercisesData];

  if (level) {
    filtered = filtered.filter(e => e.level.toUpperCase() === level.toUpperCase());
  }
  if (topic) {
    filtered = filtered.filter(e => e.topic.toLowerCase().includes(topic.toLowerCase()));
  }

  // Omit correctAnswer from the public client list if requested without answers
  const clientExercises = filtered.map(({ correctAnswer, acceptedAnswers, ...rest }) => rest);
  return res.json({ success: true, count: filtered.length, data: clientExercises });
});

// GET /api/exercises/printable - Formatted worksheet with separate answer key
router.get('/printable', (req, res) => {
  const { level } = req.query;
  let filtered = [...exercisesData];
  if (level) {
    filtered = filtered.filter(e => e.level.toUpperCase() === level.toUpperCase());
  }

  const worksheet = {
    title: level ? `Turkish Language Practice Worksheet — Level ${level.toUpperCase()}` : `Turkish Language Comprehensive Practice Worksheet`,
    targetLanguage: 'Turkish (Türkçe)',
    instructionLanguage: 'English',
    generatedAt: new Date().toISOString(),
    totalQuestions: filtered.length,
    totalPoints: filtered.reduce((sum, q) => sum + (q.points || 10), 0),
    questions: filtered.map((q, idx) => ({
      number: idx + 1,
      id: q.id,
      level: q.level,
      topic: q.topic,
      title: q.title,
      instructions: q.instructions,
      type: q.type,
      question: q.question,
      options: q.options || null,
      points: q.points || 10
    })),
    answerKey: filtered.map((q, idx) => ({
      number: idx + 1,
      id: q.id,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation
    }))
  };

  return res.json({ success: true, data: worksheet });
});

// POST /api/exercises/evaluate - Evaluate submitted answers, score them, and persist to Redis
router.post('/evaluate', async (req, res) => {
  try {
    const { userId = 'default-student', submissions = [], level } = req.body;

    if (!Array.isArray(submissions) || submissions.length === 0) {
      return res.status(400).json({ success: false, error: 'Submissions array is required' });
    }

    let totalPoints = 0;
    let earnedPoints = 0;
    let correctCount = 0;
    const detailedResults = [];

    for (const sub of submissions) {
      const question = exercisesData.find(q => q.id === sub.questionId);
      if (!question) continue;

      const qPoints = question.points || 10;
      totalPoints += qPoints;

      const userAnsNorm = normalizeAnswer(sub.answer);
      const correctNorm = normalizeAnswer(question.correctAnswer);
      const isAccepted = question.acceptedAnswers?.some(acc => normalizeAnswer(acc) === userAnsNorm);

      const isCorrect = userAnsNorm === correctNorm || isAccepted;

      if (isCorrect) {
        earnedPoints += qPoints;
        correctCount++;
      }

      detailedResults.push({
        questionId: question.id,
        question: question.question,
        topic: question.topic,
        level: question.level,
        userAnswer: sub.answer,
        correctAnswer: question.correctAnswer,
        isCorrect,
        pointsAwarded: isCorrect ? qPoints : 0,
        maxPoints: qPoints,
        explanation: question.explanation
      });
    }

    const scorePercentage = totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0;

    const evaluationRecord = {
      id: `attempt-${Date.now()}`,
      userId,
      timestamp: new Date().toISOString(),
      level: level || (submissions[0] ? (exercisesData.find(q => q.id === submissions[0].questionId)?.level || 'Mixed') : 'Mixed'),
      totalQuestions: submissions.length,
      correctCount,
      totalPoints,
      earnedPoints,
      scorePercentage,
      passed: scorePercentage >= 70
    };

    // Save record to Redis
    const userHistoryKey = `student:${userId}:history`;
    const userStatsKey = `student:${userId}:stats`;

    await redisClient.lpush(userHistoryKey, evaluationRecord);

    // Update aggregate stats in Redis
    const prevStats = (await redisClient.get(userStatsKey)) || {
      totalAttempts: 0,
      totalQuestionsAnswered: 0,
      totalCorrect: 0,
      averageScore: 0,
      levelMastery: { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 },
      topicMastery: {}
    };

    prevStats.totalAttempts += 1;
    prevStats.totalQuestionsAnswered += submissions.length;
    prevStats.totalCorrect += correctCount;
    prevStats.averageScore = Math.round(
      ((prevStats.averageScore * (prevStats.totalAttempts - 1)) + scorePercentage) / prevStats.totalAttempts
    );

    // Topic mastery calculation
    detailedResults.forEach(res => {
      const top = res.topic;
      if (!prevStats.topicMastery[top]) {
        prevStats.topicMastery[top] = { total: 0, correct: 0, percentage: 0 };
      }
      prevStats.topicMastery[top].total += 1;
      if (res.isCorrect) prevStats.topicMastery[top].correct += 1;
      prevStats.topicMastery[top].percentage = Math.round(
        (prevStats.topicMastery[top].correct / prevStats.topicMastery[top].total) * 100
      );
    });

    await redisClient.set(userStatsKey, prevStats);

    return res.json({
      success: true,
      data: {
        record: evaluationRecord,
        results: detailedResults,
        aggregateStats: prevStats
      }
    });
  } catch (error) {
    console.error('Error evaluating exercises:', error);
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

module.exports = router;
