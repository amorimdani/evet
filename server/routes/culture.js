const express = require('express');
const router = express.Router();
const cultureData = require('../data/culture.json');

// GET /api/culture - Retrieve cultural, historical, geographical, and etymology content
router.get('/', (req, res) => {
  return res.json({ success: true, data: cultureData });
});

module.exports = router;
