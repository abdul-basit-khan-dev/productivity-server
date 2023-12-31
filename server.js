const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

const ActivityRouter = require("./routes/activity.route");
const AuthRouter = require("./routes/auth.route");

/* Loading the environment variables from the .env file. */
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://basitkhanbasit640:fTQObotUxzTD2W07@cluster0.restcbt.mongodb.net/?retryWrites=true&w=majority";

/* Telling the application to use the express.json() middleware. This middleware will parse the body of
any request that has a Content-Type of application/json. */
app.use(cors());
app.use(express.json());

/* This is a route handler. It is listening for a GET request to the root route of the application.
When it receives a request, it will send back a response with the string "Hello World!". */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

/* Connecting to the database and then starting the server. */
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, console.log("Server stated on port 5000"));
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", ActivityRouter);
app.use("/api/auth", AuthRouter);

