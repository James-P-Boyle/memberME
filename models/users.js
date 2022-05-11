const { Schema, model } = require("mongoose");

const usersSchema = new Schema({
  email: { type: String, require: true, unique: true },
  userName: { type: String, require: false },
  password: { type: String, require: true, select: false },
  createdAt: { type: Date, default: Date.now() },
  isActive: { type: Boolean, default: true },
});

const usersModel = model("User", usersSchema);

module.exports = usersModel;
