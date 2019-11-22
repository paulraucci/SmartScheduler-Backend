const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = Schema({
  name: { type: String, require: true },
  dob: { type: Number, require: true },
  email: { type: String, require },
  drId: Number
});

const User = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
