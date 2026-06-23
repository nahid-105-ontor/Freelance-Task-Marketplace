const express = require("express");
const { register, login, logout, refreshToken } = require("../Controllers/auth.controller");
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
const { postApply, deleteApply, updateApply, getApply } = require("../Controllers/application.controller");
const verifyApplicationAccess = require("../MiddleWares/verifyApplicationAccess.middleware");
const send = require("../Controllers/sendMail");
const router = express.Router();
//Auth Routes
router.route("/auth/register").post(register)
router.route("/auth/login").post(login)
router.route("/auth/logout").post(authentication ,logout)
router.route("/auth/refresh-token").post(refreshTokenVerification,refreshToken)
//Job Routes
router.route("/jobs")//get job, post job
.get(authentication,authorization("admin","client","freelancer"),getjobs)
.post(authentication,authorization("admin","client"),postJobs)
router
  .route("/jobs/:id") //get,put,delete
  .get(authentication, authorization("admin", "freelancer", "client"),getjob)
  .put(authentication, authorization("admin", "client"),verifyJobAccess,updatejob)
  .delete(authentication, authorization("admin", "client"),verifyJobAccess,deleteJob);
// Application Routes
router
  .route("/application/:id")
  .post(authentication, authorization("admin", "freelancer"), postApply)
  .get(authentication, authorization("admin","client"), getApply)
  .delete(
    authentication,
    authorization("admin", "freelancer"),
    verifyApplicationAccess,
    deleteApply
  );
router
.route("/application/:id/:applicationId")
.put(authentication,authorization("admin","client"),verifyJobAccess,updateApply)


router
.route("/sendmail")
.post(send)
module.exports = router;