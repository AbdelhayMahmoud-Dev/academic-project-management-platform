import { Response, NextFunction } from 'express';
import { AuthRequest } from '../types/auth-request';

export function tenantMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const tenantId =
    (req.headers['x-tenant-id'] as string) || req.hostname.split('.')[0];

  if (!tenantId) {
    return res.status(400).json({ message: 'Tenant not specified' });
  }

  req.tenantId = tenantId;

  if (!req.user) {
    req.user = {
      id: 0,
      role: 'guest',
      permissions: [],
      tenantId,
    };
  }

  next();
}