const usersModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;
    //check email to find user                      //select is false for password in schema
    const found = await usersModel.findOne({ email }).select("+password");
    if (!found) throw new Error("Invalid Details (email)");

    //check password
    const match = await bcrypt.compare(password, found.password); //returns boolean
    if (!match) throw new Error("Invalid Details (password)");

    //if both match, sign new token
    const token = jwt.sign(
      { id: found._id, email: found.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "500m",
      }
    );
    res.json(token);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const signup = async (req, res, next) => {
  try {
    const {
      body: { email, password, userName },
    } = req;

    //Check DB for existing User
    const found = await usersModel.findOne({ email });
    if (found) throw new Error("User Already Exists");

    //Hash Password - is a promise so dont need cb from documentation
    const hash = await bcrypt.hash(password, 10);
    console.log(hash);

    //Create New User if user doesnt exist
    const user = await usersModel.create({ email, userName, password: hash });

    //Create JWT token
    //Sign Token
    const token = jwt.sign(
      //Payload
      { id: user._id, email },
      //Secret
      process.env.JWT_SECRET,
      //options(how long valid)
      { expiresIn: "500m" }
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
