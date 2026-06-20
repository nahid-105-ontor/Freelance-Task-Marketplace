const asyncHandler = require("../Utilities/asyncHandler");
const apiError = require("../Utilities/apiError");
const User = require("../Models/User.model");
const Job = require("../Models/job.model");

const verifyJobAccess = asyncHandler(async (req, res, next) => {
  const user = req.user;
  const job = await Job.findById(req.params.id);
  if (!job) {
    throw new apiError(404, "No Job Found");
  }
  req.job = job;
  const createdBy = job.createdBy.toString();
  if (user.role === "admin") {
    return next();
  }
  if (createdBy !== user.id) {
    throw new apiError(401, "Unauthorized Access");
  }
  next();
});
module.exports = verifyJobAccess;
