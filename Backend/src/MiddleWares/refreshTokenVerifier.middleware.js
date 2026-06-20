const jwt = require("jsonwebtoken");
const asyncHandler = require("../Utilities/asyncHandler");
const apiError = require("../Utilities/apiError");
const User = require("../Models/User.model");

const refreshTokenVerification = asyncHandler(async(req , res ,next)=>{
    const token = req.cookies.refreshToken || req.body.refreshToken;
    if(!token){
        throw new apiError(400,"Bad Request");
    }
    const decoded = await jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    const decodedUser = await User.findById(decoded.id);
    if(!decodedUser){
        throw new apiError(404,"User Not Found");
    }
    req.user = decodedUser;
    next()
});  
module.exports = refreshTokenVerification;