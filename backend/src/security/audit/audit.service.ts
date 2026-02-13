import { AuditRepository } from '../../modules/security/audit.repository';

const repo = new AuditRepository();

export const auditService = {
  record: repo.insert.bind(repo),
  list: repo.list.bind(repo),
};