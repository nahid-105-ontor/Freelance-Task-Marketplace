const User = require("../Models/User.model");
const apiError = require("../Utilities/apiError");
const apiResponse = require("../Utilities/apiResponse");
const asyncHandler = require("../Utilities/asyncHandler");

const getAllFreelancer = asyncHandler(async(req , res)=>{
    const allUser = await User.find({ role: "freelancer" }).select(
      "-password -refreshToken -emailVerificationToken"
    );
    if(allUser.length===0){
        throw new apiError(404,"No Freelancer Found");
    }
    return res
      .status(200)
      .json(new apiResponse(200, allUser, "Freelancer Found"));
});

const getAllClient = asyncHandler(async(req , res)=>{
   const allUser = await User.find({role:"client"}).select(
     "-password -refreshToken -emailVerificationToken"
   );
   if (allUser.length === 0) {
     throw new apiError(404, "No Client Found");
   }
   return res
     .status(200)
     .json(new apiResponse(200, allUser, "Client Found"));
});

const getUser = asyncHandler(async(req , res)=>{
      const id = req.params.id;
      const findUser = await User.findById(id).select(
        "-password -refreshToken -emailVerificationToken"
      );
      if(!findUser){
        throw new apiError(404,"No User Found");
      }
    return res
    .status(200)
    .json(new apiResponse(200,findUser,"User Found"));

});

const deleteUser = asyncHandler(async(req , res)=>{
    const id =  req.params.id;
    const findUser = await User.findByIdAndDelete(id).select(
      "-password -refreshToken -emailVerificationToken"
    );
    if (!findUser) {
      throw new apiError(404, "No User Found");
    }
    return res
    .status(200)
    .json(new apiResponse(200, findUser, "User Deleted"));
});



module.exports = { getAllFreelancer, getAllClient, getUser, deleteUser };