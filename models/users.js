const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const saltRounds = 10;
// const { appointmentSchema } = require("./appointments.js")

const userSchema = Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  dob: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: String, require: true },
  category: { type: String, default: "patient" },
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  appointments: []
  //   appointments: [appointmentSchema]
});

userSchema.pre("save", function(next) {
  // Check if document is new or a new password has been set
  if (this.isNew || this.isModified("password")) {
    // Saving reference to this because of changing scopes
    const document = this;
    bcrypt.hash(document.password, saltRounds, function(err, hashedPassword) {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

const User = mongoose.model("User", userSchema);

// module.exports = User;

module.exports = mongoose.model("User", userSchema);
