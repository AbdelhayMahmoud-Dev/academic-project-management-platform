const Notification = require('./notification.model');

exports.createNotification = async (user, title, message) => {
  await Notification.create({ user, title, message });
};
