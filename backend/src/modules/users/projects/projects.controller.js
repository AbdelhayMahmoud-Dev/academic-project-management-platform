const Project = require('./project.model');
const ApiError = require('../../utils/ApiError');

exports.createProject = async (req, res) => {
  const project = await Project.create(req.body);
  res.status(201).json(project);
};

exports.getAllProjects = async (req, res) => {
  const projects = await Project.find()
    .populate('supervisor', 'fullName email')
    .populate('students', 'fullName email');

  res.json(projects);
};

exports.getProjectById = async (req, res, next) => {
  const project = await Project.findById(req.params.id)
    .populate('supervisor', 'fullName email')
    .populate('students', 'fullName email');

  if (!project) return next(new ApiError('Project not found', 404));
  res.json(project);
};

exports.updateProject = async (req, res, next) => {
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!project) return next(new ApiError('Project not found', 404));
  res.json(project);
};

exports.deleteProject = async (req, res, next) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) return next(new ApiError('Project not found', 404));
  res.json({ message: 'Project deleted successfully' });
};
