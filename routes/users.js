const express = require("express");
const {
  login,
  signup,
  addFollower,
  editUser,
} = require("../controllers/users");
const verifyToken = require("../middlewares/verifyToken");

const usersRouter = express.Router();

usersRouter.post("/login", login);
usersRouter.post("/signup", signup);
usersRouter.post("/follow", verifyToken, addFollower);
usersRouter.put("/edit", verifyToken, editUser);

module.exports = usersRouter;
