const jwt = require("jsonwebtoken");
const asyncHandler = require("../Utilities/asyncHandler");
const apiError = require("../Utilities/apiError");
const User = require("../Models/User.model");
const authentication = asyncHandler(async(req , res,next)=>{
        const token =
          req.cookies?.accessToken ||
          req.headers["authorization"]?.replace("Bearer ", "");
        if(!token){
            throw new apiError(401,"Bad Request.Access Token Needed");
        }
        const decoded =await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        const decodedUser =await User.findById(decoded.id);
        if(!decodedUser){
            throw new apiError(400,"No User Found");
        }
        req.user = decodedUser;
        next()
});
module.exports= authentication;