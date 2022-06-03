const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  fitlerPostByUser,
} = require("../controllers/posts");

const postsRouter = express.Router();

postsRouter.use(verifyToken);

postsRouter.route("/").get(getPosts).post(createPost);
postsRouter.route("/:id").get(getPost).put(updatePost).delete(deletePost);

//get followers posts
postsRouter.route("/following/:id").get(fitlerPostByUser);

module.exports = postsRouter;
