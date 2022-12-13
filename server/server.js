const express = require("express");
const colors = require("colors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/connection");
const port = process.env.PORT || 5000;

const app = express();

// CORS
const cors = require("cors");
const { default: mongoose } = require("mongoose");
app.use(cors());

// Connect to database
mongoose.connection;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
