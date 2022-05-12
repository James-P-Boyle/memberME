const { Schema, model, Types } = require("mongoose");

const postsSchema = new Schema({
  caption: { type: String, require: true, default: "Memories" },
  img: { type: String, require: true },
  createdAt: { type: Date, default: Date.now() },
  userId: { type: Types.ObjectId, ref: "User" },
  /*  comments: [{ type: Types.ObjectId, ref: "Comment" }], */ // like line 7 "Post"
});

const postsModel = model("Post", postsSchema);

module.exports = postsModel;
