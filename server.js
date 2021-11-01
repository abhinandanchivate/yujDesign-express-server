const express = require("express");
// we have loaded the express module,

const mongoose = require("mongoose");
const dbURL = require("./config/key").mongoURI;
const users = require("./routes/api/users/user");
const posts = require("./routes/api/posts/posts");
const auth = require("./routes/api/auth/auth");
const comments = require("./routes/api/comments/comments");
const bodyParser = require("body-parser");
const app = express();
// we are creating a new express server/instance

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// get http method.
// middleware : whenever you will get the data from any req , so it will help us to handle it in terms of json .
// express middleware are teh functions that excutes during the lifecycle of a request to the expess server.

app.use(express.json());

mongoose
  .connect(dbURL)
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.json({ msg: "hello from abhi" });
  // json : javascript object notation
  // json method will retrun the json object to the client.
  // postman is client.
});

// do we need to map our custom parts/ modules with our server
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/posts", posts);
app.use("/api/comments", comments);

// req ===> /api/users any req startting with /api/users ====> users
app.listen(5000, () => {
  console.log("server started");
});
