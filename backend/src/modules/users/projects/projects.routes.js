const express = require('express');
const controller = require('./projects.controller');
const auth = require('../../middlewares/auth.middleware');
const role = require('../../middlewares/role.middleware');

const router = express.Router();

router.use(auth);

router.post('/', role('ADMIN'), controller.createProject);
router.get('/', controller.getAllProjects);
router.get('/:id', controller.getProjectById);
router.put('/:id', role('ADMIN', 'SUPERVISOR'), controller.updateProject);
router.delete('/:id', role('ADMIN'), controller.deleteProject);

module.exports = router;
