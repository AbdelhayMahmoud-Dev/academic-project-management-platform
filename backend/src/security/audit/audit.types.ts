export interface AuditPayload {
  event: string;
  userId?: number;
  ip?: string;
  userAgent?: string;
  path?: string;
  meta?: any;
  createdAt?: Date;
}