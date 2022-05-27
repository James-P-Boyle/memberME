const express = require("express");
const { login, signup, addFollower } = require("../controllers/users");
const verifyToken = require("../middlewares/verifyToken");

const usersRouter = express.Router();

usersRouter.post("/login", login);
usersRouter.post("/signup", signup);
usersRouter.post("/follow", verifyToken, addFollower);

module.exports = usersRouter;
