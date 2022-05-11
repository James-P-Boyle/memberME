const express = require("express");

const postsRouter = express.Router();

postsRouter.get("/", (req, res) => {
  res.json("working post router");
});

module.exports = postsRouter;
