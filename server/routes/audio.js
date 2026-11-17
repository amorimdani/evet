const express = require('express');
const router = express.Router();
const https = require('https');

// In-memory cache for audio buffers to be extremely fast and lightweight
const audioCache = new Map();

/**
 * GET /api/audio/pronounce?text=merhaba
 * Streams authentic native Turkish pronunciation audio (audio/mpeg)
 */
router.get('/pronounce', (req, res) => {
  const text = (req.query.text || '').trim().slice(0, 200);

  if (!text) {
    return res.status(400).json({ error: 'Text parameter is required' });
  }

  const cacheKey = text.toLowerCase();
  if (audioCache.has(cacheKey)) {
    const cachedBuffer = audioCache.get(cacheKey);
    res.set({
      'Content-Type': 'audio/mpeg',
      'Content-Length': cachedBuffer.length,
      'Cache-Control': 'public, max-age=604800, immutable'
    });
    return res.end(cachedBuffer);
  }

  const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=tr&client=tw-ob&q=${encodeURIComponent(text)}`;

  https.get(ttsUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Referer': 'https://translate.google.com/'
    }
  }, (ttsRes) => {
    if (ttsRes.statusCode !== 200) {
      return res.status(502).json({ error: 'Failed to fetch native Turkish audio' });
    }

    const chunks = [];
    ttsRes.on('data', (chunk) => chunks.push(chunk));
    ttsRes.on('end', () => {
      const buffer = Buffer.concat(chunks);
      // Keep cache size bounded (max 500 entries)
      if (audioCache.size > 500) {
        const firstKey = audioCache.keys().next().value;
        audioCache.delete(firstKey);
      }
      audioCache.set(cacheKey, buffer);

      res.set({
        'Content-Type': 'audio/mpeg',
        'Content-Length': buffer.length,
        'Cache-Control': 'public, max-age=604800, immutable'
      });
      res.end(buffer);
    });
  }).on('error', (err) => {
    console.error('TTS Proxy Error:', err.message);
    res.status(500).json({ error: 'TTS audio service error' });
  });
});

module.exports = router;
