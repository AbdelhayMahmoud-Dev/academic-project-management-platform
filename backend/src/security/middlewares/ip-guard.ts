// src/security/middlewares/ip.guard.ts
import { Request, Response, NextFunction } from 'express';

const blockedIPs: string[] = [];

export function ipGuard(req: Request, res: Response, next: NextFunction) {
  const ip = req.ip as string;

  if (blockedIPs.includes(ip)) {
    return res.status(403).json({ message: 'IP blocked' });
  }

  next();
}