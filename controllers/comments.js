const commentsModel = require("../models/comments");

const getComments = async (req, res, next) => {
  try {
    const {
      query: { post, user },
    } = req;
    console.log(post, user);
    const searchQuery = post ? { post, user } : {};
    const comments = await commentsModel.find(searchQuery);
    res.json(comments);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getComment = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const comment = await commentsModel.findById(id);
    res.json(comment);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createComment = async (req, res, next) => {
  try {
    const {
      body: { comment, post },
      user: { id },
    } = req;

    const created = await commentsModel.create({ comment, post, user: id });
    res.json(created);
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: "Something went wrong" });
  }
};

const updateComment = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const { body } = req;

    const updatedComment = await commentsModel.findByIdAndUpdate(id, body);
    res.json(updatedComment);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteComment = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const deletedComment = await commentsModel.findByIdAndDelete(id);
    res.json(deletedComment);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getComment,
  getComments,
  createComment,
  updateComment,
  deleteComment,
};
