const Task = require('./task.model');
const ApiError = require('../../utils/ApiError');

exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
};

exports.getTasksByProject = async (req, res) => {
  const tasks = await Task.find({ project: req.params.projectId })
    .populate('assignedTo', 'fullName email');

  res.json(tasks);
};

exports.updateTask = async (req, res, next) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!task) return next(new ApiError('Task not found', 404));
  res.json(task);
};

exports.deleteTask = async (req, res, next) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return next(new ApiError('Task not found', 404));
  res.json({ message: 'Task deleted successfully' });
};
