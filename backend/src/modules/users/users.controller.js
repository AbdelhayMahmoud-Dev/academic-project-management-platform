const User = require('./user.model');
const ApiError = require('../../utils/ApiError');

exports.getAllUsers = async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
};

exports.getUserById = async (req, res, next) => {
  const user = await User.findById(req.params.id).select('-password');
  if (!user) return next(new ApiError('User not found', 404));
  res.json(user);
};

exports.updateUser = async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  ).select('-password');

  if (!user) return next(new ApiError('User not found', 404));
  res.json(user);
};

exports.deactivateUser = async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { isActive: false },
    { new: true }
  );

  if (!user) return next(new ApiError('User not found', 404));
  res.json({ message: 'User deactivated successfully' });
};
