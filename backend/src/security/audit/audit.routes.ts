import { Router } from 'express';
import { AuditController } from './audit.controller';
import { auditStreamHandler } from './audit.stream.controller';

const router = Router();
const controller = new AuditController();

router.get('/', controller.list.bind(controller));
router.get('/stream', auditStreamHandler);

export default router;