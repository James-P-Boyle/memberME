const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI).catch((err) => console.log(err));
