const express = require("express");
const cors = require("cors");
require("dotenv/config");

const postsRouter = require("./routes/posts");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Port up and running on  ${port} `);
});
