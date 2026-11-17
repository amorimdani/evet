const express = require('express');
const cors = require('cors');
const path = require('path');
const redisClient = require('./db/redisClient');

const app = express();
const PORT = process.env.PORT || 3005;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/curriculum', require('./routes/curriculum'));
app.use('/api/exercises', require('./routes/exercises'));
app.use('/api/progress', require('./routes/progress'));
app.use('/api/culture', require('./routes/culture'));
app.use('/api/audio', require('./routes/audio'));

// Kubernetes Health Probes
app.get('/healthz', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    redisStatus: redisClient.isRedisConnected() ? 'connected' : 'fallback-mode'
  });
});

// Serve static React build in production
const clientDistPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientDistPath));

// Fallback to index.html for client-side React routing
app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'API endpoint not found' });
  }
  const indexPath = path.join(clientDistPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.status(200).send(`
        <!DOCTYPE html>
        <html>
          <head><title>Evet - Turkish Language Platform</title></head>
          <body style="font-family: sans-serif; text-align: center; padding: 50px;">
            <h1>Evet — Turkish Learning Platform</h1>
            <p>Backend API is running on port ${PORT}. Please build the frontend with <code>npm run build</code>.</p>
            <p><a href="/healthz">Health Check</a> | <a href="/api/curriculum/lessons">Curriculum API</a></p>
          </body>
        </html>
      `);
    }
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 [Evet App] Server listening on http://0.0.0.0:${PORT}`);
  console.log(`🏥 [Health Check] http://localhost:${PORT}/healthz`);
});
