const postsModel = require("../models/posts");

const getPosts = async (req, res, next) => {
  try {
    const posts = await postsModel.find({});
    res.json(posts);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getPost = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const post = await postsModel.findById(id);
    res.json(post);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createPost = (req, res, next) => {
  res.json("create posts");
};

const updatePost = (req, res, next) => {
  res.json("update posts");
};

const deletePost = (req, res, next) => {
  res.json("delete posts");
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
