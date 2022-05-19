const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const commentsRouter = express.Router();

commentsRouter.use(verifyToken);

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
