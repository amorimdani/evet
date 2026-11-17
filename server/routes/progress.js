const express = require('express');
const router = express.Router();
const redisClient = require('../db/redisClient');

// GET /api/progress/:userId - Retrieve progress, stats, and evaluation history from Redis
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const userHistoryKey = `student:${userId}:history`;
    const userStatsKey = `student:${userId}:stats`;

    const stats = (await redisClient.get(userStatsKey)) || {
      totalAttempts: 0,
      totalQuestionsAnswered: 0,
      totalCorrect: 0,
      averageScore: 0,
      levelMastery: { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 },
      topicMastery: {}
    };

    // Get last 20 attempts from Redis list
    const history = (await redisClient.lrange(userHistoryKey, 0, 19)) || [];

    // Calculate score trends over time
    const trendData = history
      .slice(0, 10)
      .reverse()
      .map((item, idx) => ({
        attemptIndex: idx + 1,
        date: new Date(item.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        score: item.scorePercentage,
        level: item.level
      }));

    return res.json({
      success: true,
      data: {
        userId,
        redisConnected: redisClient.isRedisConnected(),
        stats,
        history,
        trendData
      }
    });
  } catch (error) {
    console.error('Error fetching student progress:', error);
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// POST /api/progress/reset - Reset progress for a user (useful for testing or clean slate)
router.post('/reset', async (req, res) => {
  try {
    const { userId = 'default-student' } = req.body;
    await redisClient.del(`student:${userId}:history`);
    await redisClient.del(`student:${userId}:stats`);
    return res.json({ success: true, message: `Progress reset successfully for ${userId}` });
  } catch (error) {
    console.error('Error resetting progress:', error);
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

module.exports = router;
