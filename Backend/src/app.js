const express = require("express");
const cookieParser = require("cookie-parser");
const router = require("./Routes/user.route");
// const cors = require("cors");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());
// app.use(
//   cors({
//     origin: true,
//     credentials: true,
//   })
// );
app.use("/api/v1/marketplace",router)

module.exports = app;
