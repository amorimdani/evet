const express = require('express');
const router = express.Router();
const lessonsData = require('../data/lessons.json');

// GET /api/curriculum/lessons - Get all lessons (optionally filtered by level)
router.get('/lessons', (req, res) => {
  const { level } = req.query;
  if (level) {
    const filtered = lessonsData.filter(l => l.level.toUpperCase() === level.toUpperCase());
    return res.json({ success: true, count: filtered.length, data: filtered });
  }
  return res.json({ success: true, count: lessonsData.length, data: lessonsData });
});

// GET /api/curriculum/lessons/:id - Get specific lesson by ID
router.get('/lessons/:id', (req, res) => {
  const lesson = lessonsData.find(l => l.id === req.params.id);
  if (!lesson) {
    return res.status(404).json({ success: false, error: 'Lesson not found' });
  }
  return res.json({ success: true, data: lesson });
});

module.exports = router;
