import express from 'express';
import { env } from './config/env';

const app = express();

app.use(express.json());

app.get('/', (_, res) => {
  res.send('API Running 🚀');
});

app.listen(env.PORT, () => {
  console.log(`🚀 Server running on port ${env.PORT}`);
});