const asyncHandler = require("../Utilities/asyncHandler");
const apiError = require("../Utilities/apiError");
const User = require("../Models/User.model");

const authorization = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      throw new apiError(403,"Access Denied");
    }
    next();
  };
};
module.exports = authorization;