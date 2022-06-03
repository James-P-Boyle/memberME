const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  fitlerPostByUsers,
} = require("../controllers/posts");

const postsRouter = express.Router();

postsRouter.use(verifyToken);

postsRouter.route("/").get(getPosts).post(createPost);
postsRouter.route("/:id").get(getPost).put(updatePost).delete(deletePost);

//get followers posts
postsRouter.route("/following").get(fitlerPostByUsers);

module.exports = postsRouter;
