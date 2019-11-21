const express = require("express");
const app = express();
const PORT = 3003;
const mongoose = require("mongoose");

//Controllers
const appointmentController = require("./controllers/appointment.js");
const userController = require("./controllers/user.js");

//Middleware
app.use(express.json());

app.use("/appointment", appointmentController);
app.use("/user", userController);

mongoose.connect("mongodb://localhost:27017/scheduler", {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

app.listen(PORT, () => {
  console.log("listening");
});
