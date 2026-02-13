import { Router } from 'express';

const router = Router();

router.post('/report', (req, res) => {
  res.json({ ok: true });
});

export default router;













