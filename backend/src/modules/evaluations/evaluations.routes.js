const express = require('express');
const controller = require('./evaluations.controller');
const auth = require('../../middlewares/auth.middleware');
const role = require('../../middlewares/role.middleware');

const router = express.Router();

router.use(auth);

router.post(
  '/',
  role('ADMIN', 'SUPERVISOR'),
  controller.createEvaluation
);

router.get(
  '/submission/:submissionId',
  role('ADMIN', 'SUPERVISOR', 'STUDENT'),
  controller.getEvaluationBySubmission
);

module.exports = router;
