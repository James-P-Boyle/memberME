const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/posts");

const postsRouter = express.Router();

postsRouter.route("/").get(verifyToken, getPosts).post(createPost);
postsRouter.route("/:id").get(getPost).put(updatePost).delete(deletePost);

module.exports = postsRouter;
