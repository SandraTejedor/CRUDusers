const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

/* GET home page */
// router.get("/", (req, res, next) => {
//   res.render("index");
// });

//Get all users from database
router.get("/", (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => console.log("DB error", err));
});

//Get details from one specific user
router.get("/user/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => console.log("DB error", err));
});

//Add new user
router.post("/newUser", (req, res) => {
  User.create(req.body)
    .then(newUser => res.json(newUser))
    .catch(err => console.log("DB error", err));
});

//Edit/update a user
router.put("/editUser/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(newUser => res.json(newUser))
    .catch(err => console.log("DB error", err));
});

//Delete a user
router.delete("/deleteUser/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(x => res.json(x))
    .catch(err => console.log("DB error", err));
});

module.exports = router;
