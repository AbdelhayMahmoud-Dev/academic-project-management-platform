import { Request, Response } from 'express';
import { analyzeSecurityEvent } from './security.service';

export function reportEvent(req: Request, res: Response) {
  const result = analyzeSecurityEvent(req.body.event);
  res.json(result);
}