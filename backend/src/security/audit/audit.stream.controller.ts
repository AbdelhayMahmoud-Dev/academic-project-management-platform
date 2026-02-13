import { Request, Response } from 'express';
import { auditStream } from './audit.stream';

export function auditStreamHandler(req: Request, res: Response) {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  auditStream.addClient(res);

  req.on('close', () => {
    auditStream.removeClient(res);
  });
}