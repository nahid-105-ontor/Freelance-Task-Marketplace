
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`);
    console.log("Database Connected");
  } catch (error) {
    console.log("Cannot Connect Database Due to :", error.message);
    process.exit(1);
  }
};
module.exports = connectDB;
