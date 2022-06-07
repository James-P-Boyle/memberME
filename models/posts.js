const { Schema, model, Types } = require("mongoose");

const postsSchema = new Schema({
  caption: { type: String, require: true, default: "Memories" },
  img: { type: String, require: true },
  date: { type: String },
  userId: { type: Types.ObjectId, ref: "User" },
  comments: [{ type: Types.ObjectId, ref: "Comment" }],
});

const postsModel = model("Post", postsSchema);

module.exports = postsModel;
