const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const appointmentSchema = new mongoose.Schema(
  {
    date: { type: Date, require: true },
    time: { type: String, require: true },
    vistType: [String], //add drop down. P2
    comments: { type: String },
    patientId: String
  },
  { timeStamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

// module.exports = {
//   appointmentSchema: appointmentSchema,
//   Appointment: Appointment
// };

module.exports = Appointment;
