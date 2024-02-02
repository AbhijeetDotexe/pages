const express = require("express");

const app = express();
var connection = require("./redis");
var userRouter = require("./users/userindex");
var pageRouter = require("./index");
app.use(express.json());
app.use("/page", pageRouter);
app.use("/user", userRouter);

connection().then(() => {
  console.log("Successfully connected to the redis database");
});
app.listen(3000, () => {
  console.log("Server has started");
});
