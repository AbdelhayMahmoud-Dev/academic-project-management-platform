import { Pool } from 'pg';
import { env } from './env';

export const db = new Pool({
  connectionString: env.DB_URL,
});

db.on('connect', () => {
  console.log('✅ PostgreSQL Connected');
});