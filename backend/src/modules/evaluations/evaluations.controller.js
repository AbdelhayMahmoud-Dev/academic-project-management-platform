const Evaluation = require('./evaluation.model');
const ApiError = require('../../utils/ApiError');

exports.createEvaluation = async (req, res, next) => {
  const exists = await Evaluation.findOne({ submission: req.body.submission });
  if (exists) return next(new ApiError('Submission already evaluated', 409));

  const evaluation = await Evaluation.create({
    submission: req.body.submission,
    evaluator: req.user.id,
    score: req.body.score,
    feedback: req.body.feedback
  });

  res.status(201).json(evaluation);
};

exports.getEvaluationBySubmission = async (req, res, next) => {
  const evaluation = await Evaluation.findOne({ submission: req.params.submissionId })
    .populate('evaluator', 'fullName email');

  if (!evaluation) return next(new ApiError('Evaluation not found', 404));
  res.json(evaluation);
};
