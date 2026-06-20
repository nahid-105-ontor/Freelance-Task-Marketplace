const Application = require("../Models/application.model");
const Job = require("../Models/job.model");
const apiError = require("../Utilities/apiError");
const apiResponse = require("../Utilities/apiResponse");
const asyncHandler = require("../Utilities/asyncHandler");

const postApply = asyncHandler(async (req, res) => {
  const jobid = req.params.id;
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

const deleteApply = asyncHandler(async (req, res) => {
  const jobid = req.job._id;
  const deleteApplication = await Application.findByIdAndDelete(jobid);
  if (!deleteApplication) {
    throw new apiError(404, "No Job Found");
  }
  return res
    .status(200)
    .json(new apiResponse(200, deleteApplication, "Application Deleted"));
});

// const updateApply = asyncHandler(async (req, res) => {
//   const { status } = req.body;
//   if (!status) {
//     throw new apiError(404, "No Status Found");
//   }
//   const jobId = req.job._id;
//   const application = await Application.findByIdAndUpdate(
//     jobId,
//     {
//       status: status,
//     },
//     {
//       new: true,
//       runValidators: true,
//     }
//   );
//   if (!application) {
//     throw new apiError(500, "Internal Server Error");
//   }
//   if (application.status === "accepted") {
//     const otherApplication = await Application.find({ jobId: jobId });
//     if (otherApplication.length !== 0) {
//       for (let i = 0; i < otherApplication.legth; i++) {
//         const update = await Application.findOneAndUpdate({ jobId: jobId },{status:"Rejected"});
//       }
//     }
//   }
// });

const updateApply = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const { jobId, applicationId } = req.params;

  if (!status) {
    throw new apiError(400, "No status found");
  }

  const allowedStatus = ["pending", "accepted", "rejected"];
  if (!allowedStatus.includes(status)) {
    throw new apiError(400, "Invalid status");
  }

  const application = await Application.findOneAndUpdate(
    { _id: applicationId, jobId: jobId },
    { status },
    { new: true, runValidators: true }
  );

  if (!application) {
    throw new apiError(404, "Application not found for this job");
  }

  if (status === "accepted") {
    await Application.updateMany(
      {
        jobId: jobId,
        _id: { $ne: applicationId },
      },
      {
        $set: { status: "rejected" },
      }
    );
  }

  return res
    .status(200)
    .json(
      new apiResponse(
        200,
        application,
        "Application status updated successfully"
      )
    );
});

const getApply = asyncHandler(async(req,res)=>{
  const id = req.params.id;
  const application = await Application.find({jobId:id});
  if(!application){
    throw new apiError(404,"No job Found");
  }
  return res
  .status(200)
  .json(new apiResponse(200,application,"Application Found"));
});


module.exports = { postApply, deleteApply, updateApply ,getApply};
