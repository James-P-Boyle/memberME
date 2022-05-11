const usersModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = (req, res, next) => {
  res.send("LOGIN");
};

const signup = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;
    //Check DB for existing User
    const found = await usersModel.findOne({ email });
    if (found) throw new Error("User Already Exists");

    //Hash Password - is a promise so dont need cb from documentation
    const hash = await bcrypt.hash(password, 10);

    //Create New User if user doesnt exist
    const user = await usersModel.create({ email, password: hash });

    //Create JWT token
    //Sign Token
    const token = jwt.sign(
      //Payload
      { id: user._id, email },
      //Secret
      process.env.JWT_SECRET,
      //options(how long valid)
      { expiresIn: "120s" }
    );
    res.json(token);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  login,
  signup,
};
