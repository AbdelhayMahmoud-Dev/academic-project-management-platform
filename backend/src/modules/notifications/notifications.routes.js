const express = require('express');
const controller = require('./notifications.controller');
const auth = require('../../middlewares/auth.middleware');

const router = express.Router();

router.use(auth);

router.get('/', controller.getMyNotifications);
router.put('/:id/read', controller.markAsRead);

module.exports = router;
