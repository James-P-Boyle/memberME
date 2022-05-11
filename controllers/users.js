const login = (req, res, next) => {
  res.send("LOGIN");
};

const signup = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;

    const user = await usersModel.create({ email, password });
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  login,
  signup,
};
