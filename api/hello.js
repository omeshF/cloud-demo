// This is a serverless function for Vercel
// Each file in /api becomes a separate endpoint

export default function handler(req, res) {
  // This function only runs when invoked!
  res.status(200).json({
    message: 'Hello from Serverless (Vercel)!',
    platform: 'Vercel - Serverless Function',
    timestamp: new Date().toISOString(),
    architecture: 'FaaS (Function as a Service)',
    coldStart: req.headers['x-vercel-id'] ? 'Possible' : 'N/A'
  });
}
```

### `api/users.js` (Vercel Serverless Function)
```javascript
export default function handler(req, res) {
  // This function executes independently
  const users = [
    { id: 1, name: 'Alice', role: 'Developer' },
    { id: 2, name: 'Bob', role: 'Designer' },
    { id: 3, name: 'Charlie', role: 'DevOps' }
  ];

  res.status(200).json({
    users,
    platform: 'Vercel Serverless',
    executionTime: Date.now()
  });
}