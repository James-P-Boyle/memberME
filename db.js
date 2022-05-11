const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://admin:12345@cluster0.fzlsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .catch((err) => handleError(err));
