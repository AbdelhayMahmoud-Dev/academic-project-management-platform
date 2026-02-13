const express = require('express');
const controller = require('./reports.controller');
const auth = require('../../middlewares/auth.middleware');
const role = require('../../middlewares/role.middleware');

const router = express.Router();

router.use(auth);
router.use(role('ADMIN'));

router.get('/overview', controller.systemOverview);
router.get('/projects-performance', controller.projectPerformance);

module.exports = router;
