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

const createPost = async (req, res, next) => {
  try {
    const {
      body: { caption, img },
    } = req;
    console.log(req.body);
    const newPost = await postsModel.create({
      caption,
      img,
    });
    console.log(newPost);
    res.json(newPost);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const { body } = req;

    const updatedPost = await postsModel.findByIdAndUpdate(id, body);
    res.json(updatedPost);
  } catch (err) {
    res.status(500).send(err.message);
  }
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
