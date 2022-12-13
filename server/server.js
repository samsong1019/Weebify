const express = require("express");
const colors = require("colors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const db = require("./config/connection");
const port = process.env.PORT || 5000;

const app = express();

// CORS
const cors = require("cors");
const { default: mongoose } = require("mongoose");
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

//Connect to database
db.once("open", () => {
  app.listen(port, console.log(`Server running on port ${port}`));
});
