const express = require("express");
const {
  getAllClient,
  getAllFreelancer,
  getUser,
  deleteUser,
} = require("../Controllers/admin.controller");
const {
  register,
  login,
  logout,
  refreshToken,
  verificationEmail,
  doVerification,
} = require("../Controllers/auth.controller");
const authentication = require("../MiddleWares/authentication.middleware");
const refreshTokenVerification = require("../MiddleWares/refreshTokenVerifier.middleware");
const authorization = require("../MiddleWares/authorization.middleware");
const verifyJobAccess = require("../MiddleWares/verifyJobAccess.middleware");
const {
  postJobs,
  getjobs,
  getjob,
  deleteJob,
  updatejob,
} = require("../Controllers/job.controller");
const {
  postApply,
  deleteApply,
  updateApply,
  getApply,
} = require("../Controllers/application.controller");
const verifyApplicationAccess = require("../MiddleWares/verifyApplicationAccess.middleware");
const router = express.Router();

//Auth Routes
router.route("/auth/register").post(register);
router.route("/auth/login").post(login);
router.route("/auth/logout").post(authentication, logout);
router
  .route("/auth/refresh-token")
  .post(refreshTokenVerification, refreshToken);

//Job Routes
router
  .route("/jobs") //get job, post job
  .get(authentication, authorization("admin", "client", "freelancer"), getjobs)
  .post(authentication, authorization("admin", "client"), postJobs);
router
  .route("/jobs/:id") //get,put,delete
  .get(authentication, authorization("admin", "freelancer", "client"), getjob)
  .put(
    authentication,
    authorization("admin", "client"),
    verifyJobAccess,
    updatejob
  )
  .delete(
    authentication,
    authorization("admin", "client"),
    verifyJobAccess,
    deleteJob
  );

// Application Routes
router
  .route("/application/:id")
  .post(authentication, authorization("admin", "freelancer"), postApply)
  .get(authentication, authorization("admin", "client"), getApply)
  .delete(
    authentication,
    authorization("admin", "freelancer"),
    verifyApplicationAccess,
    deleteApply
  );
router
  .route("/application/:id/:applicationId")
  .put(
    authentication,
    authorization("admin", "client"),
    verifyJobAccess,
    updateApply
  );

// User Profile Route
router
  .route("/user/profile")
  .get(authentication, authorization("admin", "freelancer"))
  .put(authentication, authorization("admin", "freelancer"));
router
  .route("/user/change-password")
  .put(authentication, authorization("admin", "freelancer"));
router
  .route("/user/sendverificationemail")
  .get(authentication, verificationEmail);
router.route("/user/verifyemail/:token").post(authentication, doVerification);

// Admin Route
router
  .route("/user/freelancer")
  .get(authentication, authorization("admin"), getAllFreelancer);
router
  .route("/user/client")
  .get(authentication, authorization("admin"), getAllClient);
router
  .route("/user/:id")
  .get(authentication, authorization("admin"), getUser)
  .delete(authentication, authorization("admin"), deleteUser);

module.exports = router;
// _id

// 6a3c0811df03dabfdf74f2f3

// fullName

// "Harry Json"

// userName

// "json-908"

// email

// "harryson908@gmail.com"

// password

// "hhkshjkdks-90898"

// role

// "client"

// contact

// "65698273469823"

// avatar

// ""