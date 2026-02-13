const express = require('express');
const controller = require('./submissions.controller');
const auth = require('../../middlewares/auth.middleware');
const role = require('../../middlewares/role.middleware');
const upload = require('../../config/multer');

const router = express.Router();

router.use(auth);

router.post(
  '/',
  role('STUDENT'),
  upload.single('file'),
  controller.createSubmission
);

router.get(
  '/project/:projectId',
  role('ADMIN', 'SUPERVISOR'),
  controller.getSubmissionsByProject
);

module.exports = router;
