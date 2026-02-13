import { db } from '../../config/db';

export class BaseRepository {
  protected async query<T = any>(text: string, params?: any[]): Promise<T[]> {
    const { rows } = await db.query(text, params);
    return rows;
  }
}