import { Request, Response, NextFunction } from 'express';
import { auditService } from './audit.service';

export const auditMiddleware =
  (event: string) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    await auditService.record({
      event,
      userId: req.user?.id,
      ip: req.ip,
      userAgent: req.headers['user-agent'],
      path: req.originalUrl,
    });
    next();
  };