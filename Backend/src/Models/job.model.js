const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String
    },
    budget:{
        type:Number,
        required:true,
        min:0
    },
    deadline:{
        type:Date,
        required:true,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:["open","closed"],
    }

},{
    timestamps:true
})
const Job = mongoose.model("Job",jobSchema);
module.exports = Job;