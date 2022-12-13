const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Setting up connection to Mongo Atlas DB

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
