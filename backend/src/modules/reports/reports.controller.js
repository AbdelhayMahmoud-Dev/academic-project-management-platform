const User = require('../users/user.model');
const Project = require('../projects/project.model');
const Submission = require('../submissions/submission.model');
const Evaluation = require('../evaluations/evaluation.model');

exports.systemOverview = async (req, res) => {
  const usersCount = await User.countDocuments();
  const projectsCount = await Project.countDocuments();
  const submissionsCount = await Submission.countDocuments();
  const evaluationsCount = await Evaluation.countDocuments();

  res.json({
    usersCount,
    projectsCount,
    submissionsCount,
    evaluationsCount
  });
};

exports.projectPerformance = async (req, res) => {
  const data = await Evaluation.aggregate([
    {
      $lookup: {
        from: 'submissions',
        localField: 'submission',
        foreignField: '_id',
        as: 'submission'
      }
    },
    { $unwind: '$submission' },
    {
      $group: {
        _id: '$submission.project',
        averageScore: { $avg: '$score' }
      }
    }
  ]);

  res.json(data);
};
