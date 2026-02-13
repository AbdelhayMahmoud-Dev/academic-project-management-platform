const Notification = require('./notification.model');

exports.getMyNotifications = async (req, res) => {
  const notifications = await Notification.find({ user: req.user.id })
    .sort({ createdAt: -1 });

  res.json(notifications);
};

exports.markAsRead = async (req, res) => {
  await Notification.findByIdAndUpdate(req.params.id, { isRead: true });
  res.json({ message: 'Notification marked as read' });
};
