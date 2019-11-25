const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const { appointmentSchema } = require("./appointments.js")

const userSchema = Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  dob: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: String, require: true },
  category: { type: String, default: "patient" },
  username: { type: String, require: true },
  password: { type: String, require: true }
  //   appointments: []
  //   appointments: [appointmentSchema]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
