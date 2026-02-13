// src/security/middlewares/bruteforce.ts
import { Request, Response, NextFunction } from 'express';

export function bruteForceGuard(
  req: Request,
  res: Response,
  next: NextFunction
) {
  next();
}