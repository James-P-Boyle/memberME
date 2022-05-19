const express = require("express");
const commentsRouter = express.Router();
const {
  getComment,
  getComments,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/comments");

commentsRouter.route("/").get(getComments).post(createComment);
commentsRouter
  .route("/:id")
  .get(getComment)
  .put(updateComment)
  .delete(deleteComment);

module.exports = commentsRouter;
