const jwt = require("jsonwebtoken");
const User = require("../models/User");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    console.log(token);
    if (!token) {
      return res.status(401).send("Please Login!");
    }

    const decodedObj = jwt.verify(token, "DEV@Bumble$790");

    const { _id } = decodedObj;

    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send("User not found");
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("Authentication error:", err);
    res.status(401).send("ERROR: " + err.message);
  }
};

module.exports = {
  userAuth,
};
