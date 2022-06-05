const express = require("express");
const bodyParser = require("body-parser");
const routesHandler = require("./routes/handler.js");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
require("dotenv/config");
let mongod = null;
const cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routesHandler);
app.use(cors());

const { clientOrigins, serverPort } = require("./config/env.dev");
const { messagesRouter } = require("./messages/messages.router");

//connect to mongoose

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("REST API is listening on port " + PORT);
});
