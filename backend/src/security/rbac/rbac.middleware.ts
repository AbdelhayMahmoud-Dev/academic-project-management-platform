// src/security/rbac/rbac.middleware.ts
import { Response, NextFunction } from 'express';
import { AuthRequest } from '../../types/auth-request';

export function requirePermission(permission: string) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user.permissions.includes(permission)) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    next();
  };
}