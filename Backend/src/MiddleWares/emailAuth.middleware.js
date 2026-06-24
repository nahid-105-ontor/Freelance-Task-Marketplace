const User = require("../Models/User.model");
const apiError = require("../Utilities/apiError");
const asyncHandler = require("../Utilities/asyncHandler");

const emailAuth = asyncHandler(async(req , res , next)=>{
    const emailToken = req.params.token;
    const id  =  req.user._id;
    const findUser = await User.findOne({_id:id});
    if (!findUser) {
      throw new apiError(404, "User not found");
    }
    if (findUser.isVerified) {
      throw new apiError(400, "Email already verified");
    }
    const findToken = findUser.emailVerificationToken;
    if(!findToken){
        throw new apiError(404,"Invalid Request");
    }
    if(emailToken !== findToken){
        throw new apiError(401,"Bad Request");
    }
    if (Date.now() > findUser.emailVerificationTokenExpires.getTime()) {
      throw new apiError(410, "Token expired");
    }
    next()
});