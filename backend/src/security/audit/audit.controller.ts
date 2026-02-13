import { Request, Response } from 'express';
import { auditService } from './audit.service';

export class AuditController {
  async list(req: Request, res: Response) {
    const page = Number(req.query.page ?? 1);
    const limit = Number(req.query.limit ?? 20);

    const data = await auditService.list(limit, (page - 1) * limit);
    res.json({ data, page });
  }
}