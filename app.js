const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const clientRoutes = require("./api/routes/clients");
const sessionRoutes = require("./api/routes/sessions");
const therapistRoutes = require("./api/routes/therapists");
//Connect to MongoDB
//Connect to MongoDB
//Connect to MongoDB
mongoose.connect(
  "mongodb+srv://dbUser:pwd@cluster0.jeb7c.mongodb.net/ClientTherapist?retryWrites=true&w=majority"
);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes which should handle requests
app.use("/clients", clientRoutes);
app.use("/sessions", sessionRoutes);
app.use("/therapists", therapistRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
