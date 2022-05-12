require("dotenv/config");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "jamesyboyle",
  api_key: "571366173718858",
  api_secret: "jDlmZId2t7-w1fgqDyWzRR9lvl8",
});

module.exports = { cloudinary };
