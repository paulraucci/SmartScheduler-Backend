const express = require("express");
const user = express.Router();
const User = require('../models/users.js')

//Index Route
user.get("/", (req, res) => {
  User.find({}, (err, foundUser) => {
    if (err) {
      res.status(400).json({ err: err.message });
    }
    res.status(200).json(foundUser);
  });
});

//Create Route
user.post("/", (req, res) => {
  User.create(req.body, (err, createdUser) => {
    if (err) {
      res.status(400).json({ err: err.message });
    }
    res.status(200).send(createdUser);
  });
});

//Delete Route
user.delete("/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id, (error, deletedUser) => {
    if (error) {
      res.status(400).json({ error: error, message });
    }
    res.status(200).json(deletedUser);
  });
});

//Update Route
user.put("/:id", (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedUser) => {
      if (error) {
        res.status(400).json({ error: error.message });
      }
      res.status(200).json(updatedUser);
    }
  );
});

module.exports = user;
