const express = require("express");

const routes = express.Router();
// express ===> do we need to load the express module?

routes.get("/test", (req, res) => {
  res.json({ msg: "hello from post" });
});

module.exports = routes;
// it will export it to the outside world
// public in nature.
