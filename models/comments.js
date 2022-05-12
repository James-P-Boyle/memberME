const { Schema, model, Types } = require("mongoose");

const commentsSchema = new Schema({
  userId: { type: Types.ObjectId, ref: "User" },
  comment: { type: String, require: true },
  createdAt: { type: Date, default: Date.now() },
});

const commentsModel = model("User", commentsSchema);

module.exports = commentsModel;
