export default function handler(req, res) {
  const now = new Date();
  
  res.status(200).json({
    timestamp: now.toISOString(),
    unix: Math.floor(now.getTime() / 1000),
    timezone: 'UTC',
    platform: 'Vercel Serverless Function',
    note: 'This function was created on-demand!'
  });
}