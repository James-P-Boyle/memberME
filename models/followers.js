const { Schema, model, Types } = require("mongoose");

const followersSchema = new Schema({
  email: { type: String, require: true, unique: true },
  userName: { type: String, require: false },
  password: { type: String, require: true, select: false },
  createdAt: { type: Date, default: Date.now() },
  isActive: { type: Boolean, default: true },
  following: [{ type: Types.ObjectId, ref: "User" }],
});

const followersModel = model("User", followersSchema);

module.exports = followersModel;
