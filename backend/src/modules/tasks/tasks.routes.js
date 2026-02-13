const express = require('express');
const controller = require('./tasks.controller');
const auth = require('../../middlewares/auth.middleware');
const role = require('../../middlewares/role.middleware');

const router = express.Router();

router.use(auth);

router.post('/', role('ADMIN', 'SUPERVISOR'), controller.createTask);
router.get('/project/:projectId', controller.getTasksByProject);
router.put('/:id', role('ADMIN', 'SUPERVISOR'), controller.updateTask);
router.delete('/:id', role('ADMIN', 'SUPERVISOR'), controller.deleteTask);

module.exports = router;
