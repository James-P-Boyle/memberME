const getPosts = async (req, res, next) => {
  res.json("get posts");
};

const getPost = async (req, res, next) => {
  res.json("get post");
};

const createPost = (req, res, next) => {
  res.json("create posts");
};

const updatePost = (req, res, next) => {
  res.json("update posts");
};

const deletePost = (req, res, next) => {
  res.json("delete posts");
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
