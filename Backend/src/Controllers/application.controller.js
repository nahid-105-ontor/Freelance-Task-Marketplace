const Application = require("../Models/application.model");
const Job = require("../Models/job.model");
const apiError = require("../Utilities/apiError");
const apiResponse = require("../Utilities/apiResponse");
const asyncHandler = require("../Utilities/asyncHandler");

const postApply = asyncHandler(async (req, res) => {
  const jobid = req.params.jobid;
  const userid = req.user.id;

  const findJob = await Job.findById(jobid);

  if (!findJob) {
    throw new apiError(404, "No Job Found");
  }

  if (findJob.status !== "open") {
    throw new apiError(400, "Job Is Closed");
  }

  const existingApplication = await Application.findOne({
    jobId: jobid,
    freelancerId: userid,
  });

  if (existingApplication) {
    throw new apiError(409, "Already Applied");
  }

  const apply = await Application.create({
    jobId: jobid,
    freelancerId: userid,
  });

  return res
    .status(201)
    .json(new apiResponse(201, apply, "Applied Successfully"));
});


module.exports = { postApply };
