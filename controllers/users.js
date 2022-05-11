const login = (req, res, next) => {
  res.send("LOGIN");
};

const signup = async (req, res, next) => {
  res.send("SIGNUP");
};

module.exports = {
  login,
  signup,
};
