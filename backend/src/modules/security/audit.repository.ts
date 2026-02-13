import { db } from '../../config/db';

export class AuditRepository {
  async insert(data: any) {
    await db.query(
      `
      INSERT INTO audit_logs
      (event, user_id, ip, user_agent, path, meta, created_at)
      VALUES ($1,$2,$3,$4,$5,$6,$7)
      `,
      [
        data.event,
        data.userId ?? null,
        data.ip ?? null,
        data.userAgent ?? null,
        data.path ?? null,
        data.meta ? JSON.stringify(data.meta) : null,
        new Date(),
      ]
    );
  }

  async list(limit: number, offset: number) {
    const { rows } = await db.query(
      `
      SELECT * FROM audit_logs
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2
      `,
      [limit, offset]
    );

    return rows;
  }
}