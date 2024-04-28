const mongoose = require("mongoose");
const config = require("../../Config/Config");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongoURL, {
      //   useNewURLParser: true,
      //   useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected:${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to MongoDB ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
