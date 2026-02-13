const express = require('express');
const controller = require('./teams.controller');
const auth = require('../../middlewares/auth.middleware');
const role = require('../../middlewares/role.middleware');

const router = express.Router();

router.use(auth);

router.post('/', role('ADMIN', 'SUPERVISOR'), controller.createTeam);
router.get('/', controller.getTeams);
router.get('/project/:projectId', controller.getTeamByProject);
router.put('/:id', role('ADMIN', 'SUPERVISOR'), controller.updateTeam);

module.exports = router;
