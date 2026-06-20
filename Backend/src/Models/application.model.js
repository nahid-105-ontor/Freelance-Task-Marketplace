const mongoose = require("mongoose");
const applicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    freelancerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    cv: {
      type: String,
    },
    coverLetter: {
      type: String,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "accepted", "rejected"],
    },
  },
  {
    timestamps: true,
  }
);
applicationSchema.index(
  {
    jobId: 1,
    freelancerId:1,
  },
  {
    unique: true,
  }
);
const Application = mongoose.model("Application",applicationSchema);
module.exports=Application;
