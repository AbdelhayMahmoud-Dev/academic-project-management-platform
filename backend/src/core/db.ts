import { Pool } from 'pg';
import { env } from '../config/env';

export const db = new Pool({
  connectionString: env.DB_URL,
});

db.on('connect', () => {
  console.log('✅ PostgreSQL connected');
});