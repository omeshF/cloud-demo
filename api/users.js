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