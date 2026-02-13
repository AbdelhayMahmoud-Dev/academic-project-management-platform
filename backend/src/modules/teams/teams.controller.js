const Team = require('./team.model');
const ApiError = require('../../utils/ApiError');

exports.createTeam = async (req, res, next) => {
  const existing = await Team.findOne({ project: req.body.project });
  if (existing) return next(new ApiError('Team already exists for this project', 409));

  const team = await Team.create(req.body);
  res.status(201).json(team);
};

exports.getTeams = async (req, res) => {
  const teams = await Team.find()
    .populate('project', 'title')
    .populate('leader', 'fullName email')
    .populate('members', 'fullName email');

  res.json(teams);
};

exports.getTeamByProject = async (req, res, next) => {
  const team = await Team.findOne({ project: req.params.projectId })
    .populate('leader members', 'fullName email');

  if (!team) return next(new ApiError('Team not found', 404));
  res.json(team);
};

exports.updateTeam = async (req, res, next) => {
  const team = await Team.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!team) return next(new ApiError('Team not found', 404));
  res.json(team);
};
