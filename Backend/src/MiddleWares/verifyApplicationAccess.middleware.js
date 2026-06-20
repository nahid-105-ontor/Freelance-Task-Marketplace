const asyncHandler = require("../Utilities/asyncHandler");
const apiError = require("../Utilities/apiError");
const User = require("../Models/User.model");
const Application = require("../Models/application.model");

const verifyApplicationAccess = asyncHandler(async (req, res, next) => {
  const user = req.user;

  const application = await Application.findOne({jobId:req.params.id});
  if (!application) {
    throw new apiError(404, "No Job Found");
  }
  req.job = application;
  const createdBy = application.freelancerId.toString();
  if (user.role === "admin") {
    return next();
  }
  if (createdBy !== user.id) {
    throw new apiError(401, "Unauthorized Access");
  }
  
  next();
});
module.exports = verifyApplicationAccess;
