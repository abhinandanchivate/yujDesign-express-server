const express = require("express");

const routes = express.Router();
// express ===> do we need to load the express module?

routes.get("/test", (req, res) => {
  res.json({ msg: "hello from user" });
});

// @route post api/users/register
// desc : register the user ===> new Record ===> get/post/delete/put
// @access : public
routes.post("/register", (req, res) => {
  res.json(req.body.name);
});

module.exports = routes;
// it will export it to the outside world
// public in nature.
