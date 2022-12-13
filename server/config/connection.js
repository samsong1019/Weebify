const dotenv = require("dotenv");

dotenv.config();

// Setting up connection to Mongo Atlas DB
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//const connectDB = async () => {
 // const conn = await mongoose.connect(process.env.MONGO_URI);

 // console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
//};

module.exports = mongoose.connection;
