const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// API Routes
app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello from PaaS (Render)!',
    platform: 'Render - Always Running Server',
    timestamp: new Date().toISOString(),
    architecture: 'Traditional PaaS'
  });
});

app.get('/api/users', (req, res) => {
  res.json({
    users: [
      { id: 1, name: 'Alice', role: 'Developer' },
      { id: 2, name: 'Bob', role: 'Designer' },
      { id: 3, name: 'Charlie', role: 'DevOps' }
    ],
    platform: 'Render PaaS'
  });
});

app.get('/api/time', (req, res) => {
  const now = new Date();
  res.json({
    timestamp: now.toISOString(),
    unix: Math.floor(now.getTime() / 1000),
    timezone: 'UTC',
    platform: 'Render PaaS'
  });
});

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌍 This is a traditional PaaS deployment`);
});