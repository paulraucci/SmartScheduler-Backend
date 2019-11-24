const express = require("express");
const User = require("../models/users.js");
const bcrypt = require("bcrypt");
const session = express.Router();
const bodyParser = require("body-parser");
const path = require("path");

session.get("/api/about", function(req, res) {
  res.send("Welcome!");
});

// session.get("/api/session", withAuth, function(req, res) {
//   res.send("The password is potato");
// });

// session.get("/new", (req, res) => {
//   res.redirect("/api/session");
// });

// from JWT example, comment this out for now

// user.post('/api/register', function(req, res) {
//     const { email, password } = req.body;
//     const user = new User({ email, password });
//     user.save(function(err) {
//       if (err) {
//         console.log(err);
//         res.status(500).send("Error registering new user please try again.");
//       } else {
//         res.status(200).send("Welcome to the club!");
//       }
//     });
//   });

// this code comes from Seymur's
// router.post("/", (req, res) => {
//   User.findOne({ username: req.body.username }, (err, foundUser) => {
//     if (bcrypt.compareSync(req.body.password, foundUser.password)) {
//       if (foundUser.username === "admin") {
//         req.session.currentUser = foundUser;
//         res.redirect("/appointiment/admin");
//       } else {
//         req.session.currentUser = foundUser;
//         res.redirect("/appointment/:id");
//       }
//     } else {
//       res.send("Wrong Password");
//     }
//   });
// });

session.delete("/", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

module.exports = session;
