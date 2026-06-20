const mongoose = require("mongoose");
const {
  hashPassword,
  comparePassword,
} = require("../Utilities/bcryptPassword");
const userSchema = new mongoose.Schema(
  {
    fullName: {
      //OAuth
      type: String,
      required: true,
      trim: true,
    },
    userName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    email: {
      //OAuth
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      //OAuth
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "client", "freelancer"],
      default: "client",
      required: true,
    },
    contact: {
      //Optional
      type: String,
      default: "",
    },
    authProvider: {
      type: String,
      enum: ["local", "google", "github"],
    },
    isVerified: {
      //Email Verification
      type: Boolean,
      default: false,
    },
    profileImage: {
      //Oauth or update
      type: String,
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function beforeSave(next) {
  if (!this.isModified("password") || !this.password) {
    return next();
  }
  this.password = await hashPassword(this.password);
});
userSchema.methods.isPasswordCorrect = async function (password) {
  const verdict = await comparePassword(password, this.password);
  return verdict;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
