
const optionsHttp = require("../constants");
const Job = require("../Models/job.model");
const apiError = require("../Utilities/apiError");
const apiResponse = require("../Utilities/apiResponse");
const asyncHandler = require("../Utilities/asyncHandler");


const postJobs = asyncHandler(async(req , res)=>{
   const { title, description, budget, deadline, createdBy, status }=req.body;
   if(!title){
    throw new apiError(400,"Job Title is Required");
   }
   if(!budget){
    throw new apiError(400,"Job Budget is Required");
   }
   if(!deadline){
    throw new apiError(400,"There is no Deadline");
   }
   if(!createdBy){
    throw new apiError(400,"There is Job Owner")
   }
   if(!status){
    throw new apiError(400,"There is No Job Status");
   }
   const savejob = await Job.create({
    title,
    description,
    budget,
    deadline,
    createdBy,
    status,
   });
   if(!savejob){
    throw new apiError(500,"Internal Server Error");
   }
   return res
   .status(201)
   .json(new apiResponse(201,savejob,"Job Posted"));

});

const getjobs = asyncHandler(async(req ,res)=>{
    const jobs = await Job.find({});
    if(!jobs){
        throw new apiError(404,"No Job Found")
    }
    return res
    .status(200)
    .json(new apiResponse(200,jobs,"Jobs Are Found"));
});

const getjob = asyncHandler(async(req , res)=>{
    const job = await Job.findById(req.params.id);
    if(!job){
        throw new apiError(404,"No job Found")
    }
    return res
    .status(200)
    .json(new apiResponse(200,job,"Job Found"));
});

const deleteJob = asyncHandler(async(req,res)=>{
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      throw new apiError(404, "No job Found");
    }
    return res
    .status(200)
    .json(new apiResponse(200, job, "Job Deleted"));
});


const updatejob = asyncHandler(async(req , res)=>{
    const job = await Job.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
   if(!job){
    throw new apiError(404,"No Job Found")
   }
   return res
   .status(200)
   .json(new apiResponse(200,job,"Resource Updated"));
});

module.exports = { postJobs, getjobs, getjob, deleteJob, updatejob };