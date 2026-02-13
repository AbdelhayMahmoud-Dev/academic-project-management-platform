const Submission = require('./submission.model');
const ApiError = require('../../utils/ApiError');

exports.createSubmission = async (req, res, next) => {
  if (!req.file) return next(new ApiError('File is required', 400));

  const submission = await Submission.create({
    project: req.body.project,
    student: req.user.id,
    filePath: req.file.path
  });

  res.status(201).json(submission);
};

exports.getSubmissionsByProject = async (req, res) => {
  const submissions = await Submission.find({ project: req.params.projectId })
    .populate('student', 'fullName email');

  res.json(submissions);
};
const notify = require('../notifications/notification.service');

await notify.createNotification(
  req.user.id,
  'Submission Uploaded',
  'Your project submission was uploaded successfully'
);
