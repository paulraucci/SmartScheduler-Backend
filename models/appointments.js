const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = Schema({
  date: { type: String, require: true},
  time: { type: String, require: true},
  vistType: { type: String, require: true}, //add drop down. P2
  comments: { type: String },
  drId: Number,
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = { appointmentSchema: appointmentSchema, Appointment: Appointment }