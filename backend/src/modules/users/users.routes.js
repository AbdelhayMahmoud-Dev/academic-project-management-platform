const express = require('express');
const controller = require('./users.controller');
const auth = require('../../middlewares/auth.middleware');
const role = require('../../middlewares/role.middleware');

const router = express.Router();

router.use(auth);

router.get('/', role('ADMIN'), controller.getAllUsers);
router.get('/:id', role('ADMIN'), controller.getUserById);
router.put('/:id', role('ADMIN'), controller.updateUser);
router.delete('/:id', role('ADMIN'), controller.deactivateUser);

module.exports = router;
