const { Schema, model, Types } = require("mongoose");

const commentsSchema = new Schema({
  user: { type: Types.ObjectId, ref: "User" },
  post: { type: Types.ObjectId, ref: "Post" },
  comment: { type: String, require: true },
  createdAt: { type: Date, default: Date.now() },
});

const commentsModel = model("Comment", commentsSchema);

module.exports = commentsModel;
