require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./DB/dbConnector");
const app = require("./app");
const port = process.env.PORT;
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server Running At Port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Connection Faild", error);
  });
