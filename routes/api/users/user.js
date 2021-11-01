const express = require("express");

const routes = express.Router();
// express ===> do we need to load the express module?

const User = require("../../../model/User");
// are we refering our models to the

const { check, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");

// load input validations
//const registerInputValidations = require("../../../validation/registerValidation");

routes.get("/test", (req, res) => {
  res.json({ msg: "hello from user" });
});

// @route post api/users/register
// desc : register the user ===> new Record ===> get/post/delete/put
// @access : public
routes.post(
  "/register",
  check("name", "Name is required").notEmpty(),
  check("email", "Email is required").isEmail(),
  check("password", "Password is required").isLength({ min: 6 }),
  (req, res) => {
    // do we need to validate the data or not?
    // const { errors, isValid } = registerInputValidations(req.body);

    //console.log(isValid);
    // check validations
    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }
    //===> from here data will go to DB(mongodb)
    // to validate the data
    //else {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      avatar: req.body.avatar,
    });

    newUser
      .save()
      .then((user) => res.json(user))
      .catch((err) => console.log(err));

    //res.json(req.body);
  }
);

module.exports = routes;
// it will export it to the outside world
// public in nature.
