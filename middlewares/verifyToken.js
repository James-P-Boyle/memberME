const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  //must have a header called authorization

  if (req.headers.authorization) {
    const {
      headers: { authorization },
    } = req;
    //seperate string[[0] bearer " " [1] token]
    const token = authorization.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      //must be verified to go to the next middleware func
      next();
    } catch (err) {
      res.status(403).send(err.message);
    }
  } else {
    res.status(403).send("Please Login First");
  }
};

module.exports = verifyToken;
