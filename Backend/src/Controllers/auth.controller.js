const apiError = require("../../../../Backend/src/Utilities/apiError");
const optionsHttp = require("../constants");
const User = require("../Models/User.model");
const apiResponse = require("../Utilities/apiResponse");
const asyncHandler = require("../Utilities/asyncHandler");
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
  .json(new apiResponse(200,updateUser,"User Logged out Successful"));
});

const refreshToken = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if(!user){
    throw new apiError(404,"No User Found");
  }
  const id = user._id;
  const role = user.role;
  const email = user.email;
  
  const access = await accessTokengenerator(id,role,email);
  const refresh = await refreshTokengenerator(id,role)
  
  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      refreshToken:refresh
    },
    {
      new: true,
    }
  ).select("-password -refreshToken");
  if(!updatedUser){
    throw new apiError(500,"Internal Server Error")
  }

  return res
  .cookie("accessToken",access,optionsHttp)
  .cookie("refreshToken",refresh,optionsHttp)
  .status(200)
  .json(200,updatedUser,"Operation Successfull");
});

module.exports = { register, login, logout, refreshToken };
