const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const appointmentSchema = new mongoose.Schema(
  {
    date: { type: Date, require: true },
    time: { type: String, require: true },
    visitType: String, //add drop down. P2
    comments: String,
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
