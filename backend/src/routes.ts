// src/routes.ts
import { Router } from 'express';
import auditRoutes from './security/audit/audit.routes';
import securityRoutes from './security/security.routes';

const router = Router();

router.use('/audit', auditRoutes);
router.use('/security', securityRoutes);

export default router;