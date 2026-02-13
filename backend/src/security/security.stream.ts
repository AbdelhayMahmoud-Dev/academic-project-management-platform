import { Request, Response } from 'express';

export function securityStream(req: Request, res: Response) {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');

  setInterval(() => {
    res.write(`data: ${JSON.stringify({ status: 'ok', time: Date.now() })}\n\n`);
  }, 3000);
}