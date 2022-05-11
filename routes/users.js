const express = require("express");

const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
  res.json("working users router");
});

module.exports = usersRouter;
