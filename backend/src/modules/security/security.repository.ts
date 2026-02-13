import { db } from '../../config/db';

export class SecurityRepository {
  async getEventStats() {
    const { rows } = await db.query(`
      SELECT event, COUNT(*)::int AS count
      FROM audit_logs
      GROUP BY event
      ORDER BY count DESC
    `);

    return rows;
  }
}