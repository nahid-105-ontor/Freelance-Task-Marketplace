const crypto = require("crypto");
const apiError = require("../../../../Backend/src/Utilities/apiError");
const optionsHttp = require("../constants");
const User = require("../Models/User.model");
const apiResponse = require("../Utilities/apiResponse");
const asyncHandler = require("../Utilities/asyncHandler");
const {
  sendWelcomeEmail,
  sendVerificationEmail,
  successVerificationEmail,
} = require("../Utilities/email");
const {
  refreshTokengenerator,
  accessTokengenerator,
} = require("../Utilities/tokenGenerator");

const register = asyncHandler(async (req, res) => {
  const { fullName, userName, email, role, password, contact } = req.body;
  if (!fullName) {
    throw new apiError(400, "Fullname Required");
  }
  if (!userName) {
    throw new apiError(400, "userName Required");
  }
  if (!password) {
    throw new apiError(400, "Password Required");
  }
  const finduserName = await User.findOne({ userName });
  if (finduserName) {
    throw new apiError(409, "userName Exists");
  }
  if (!email) {
    throw new apiError(400, "Email Required");
  }
  const findEmail = await User.findOne({ email });
  if (findEmail) {
    throw new apiError(409, "Email Already Exists");
  }

  if (!role) {
    throw new apiError(400, "User Role Required");
  }
  const saveUser = await User.create({
    fullName,
    userName,
    email,
    password,
    role,
    contact,
    authProvider: "local",
  });
  if (!saveUser) {
    throw new apiError(500, "Internal Server Error");
  }

  const saveId = saveUser._id;
  const saveRole = saveUser.role;
  const saveEmail = saveUser.email;

  const accessToken = await accessTokengenerator(saveId, saveRole, saveEmail);
  const refreshToken = await refreshTokengenerator(saveId, saveRole);

  const updatedUser = await User.findByIdAndUpdate(saveId, {
    refreshToken: refreshToken,
  });

  if (!updatedUser) {
    throw new apiError(500, "Internal Server Error");
  }
  const user = await User.findById(saveId).select("-password -refreshToken");
  const dashboardUrl = `${process.env.CLIENT_URL}/dashboard`;
  const to = email;
  const result = sendWelcomeEmail({
    to: email,
    subject: "Wellcome to Job Bee",
    fullName,
    dashboardUrl,
  });

  return res
    .cookie("accessToken", accessToken, optionsHttp)
    .cookie("refreshToken", refreshToken, optionsHttp)
    .status(201)
    .json(new apiResponse(201, user, "User Created"));
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    throw new apiError(400, "No Email Found");
  }
  if (!password) {
    throw new apiError(400, "Incorrect Credentials");
  }
  const user = await User.findOne({ email: email }).select(
    "-password -refreshToken"
  );

  const access = await accessTokengenerator(user._id, user.role, user.email);
  const refresh = await refreshTokengenerator(user._id, user.role);
  const updateUser = await User.findByIdAndUpdate(
    user._id,
    {
      refreshToken: refresh,
    },
    { new: true }
  );
  if (!updateUser) {
    throw new apiError(500, "Internal Server Error");
  }
  return res
    .cookie("accessToken", access, optionsHttp)
    .cookie("refreshToken", refresh, optionsHttp)
    .status(200)
    .json(new apiResponse(200, user, "Login Successfull"));
});

const logout = asyncHandler(async (req, res) => {
  const updateUser = await User.findByIdAndUpdate(
    req.user._id,
    {
      refreshToken: "",
    },
    { new: true }
  ).select("-password -refreshToken");
  return res
    .clearCookie("accessToken")
    .clearCookie("refreshToken")
    .status(200)
    .json(new apiResponse(200, updateUser, "User Logged out Successful"));
});

const refreshToken = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    throw new apiError(404, "No User Found");
  }
  const id = user._id;
  const role = user.role;
  const email = user.email;

  const access = await accessTokengenerator(id, role, email);
  const refresh = await refreshTokengenerator(id, role);

  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      refreshToken: refresh,
    },
    {
      new: true,
    }
  ).select("-password -refreshToken");
  if (!updatedUser) {
    throw new apiError(500, "Internal Server Error");
  }

  return res
    .cookie("accessToken", access, optionsHttp)
    .cookie("refreshToken", refresh, optionsHttp)
    .status(200)
    .json(200, updatedUser, "Operation Successfull");
});

const verificationEmail = asyncHandler(async (req, res) => {
  const id = req.user._id;
  const email = req.user.email;
  console.log(id, email);

  const findUser = await User.findOne({ _id: id }).select(
    "-password -refreshToken"
  );
  if (!findUser) {
    throw new apiError(404, "No User Found");
  }
  const emailToken = crypto.randomBytes(32).toString("hex");
  const emailTokenExpire = new Date(Date.now() + 24 * 60 * 60 * 1000);
  findUser.emailVerificationToken = emailToken;
  findUser.emailVerificationTokenExpires = emailTokenExpire;
  const verifyUrl = `${process.env.SERVER_URL}/auth/verifyemail/:${emailToken}`;
  const fullName = findUser.fullName;
  console.log(req.user.email);
  const sendEmail = await sendVerificationEmail({
    to: req.user.email,
    subject: "Verify Your Email",
    fullName: fullName,
    verificationLink: verifyUrl,
  });
  findUser.save();
  return res
    .status(200)
    .json(new apiResponse(200, findUser, "Verification Email Send"));
});

const doVerification = asyncHandler(async (req, res) => {
  const id = req.user._id;
  const findUser = await User.findByIdAndUpdate(
    id,
    {
      isVerified: true,
    },
    { new: true, runValidators: true }
  ).select("-password -refreshToken");
  if (!findUser) {
    throw new apiError(404, "No User Found");
  }
  findUser.emailVerificationToken = undefined;
  findUser.emailVerificationTokenExpires = undefined;
  findUser.save();
  const sendConfirmation = await successVerificationEmail({to:findUser.email,subject:"Verification Successfull",fullName:findUser.fullName});
  return res
  .status(200)
  .json(new apiResponse(200,findUser,"User Verified"));
});

module.exports = {
  register,
  login,
  logout,
  refreshToken,
  verificationEmail,
  doVerification,
};
