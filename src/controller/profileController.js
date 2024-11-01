const User = require("../models/User");
const { validateEditProfileData } = require("../utils/validation");

const profileView = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
        return res.status(404).send({ success: false, message: "User not found" });
      }
    
    res.send(user);
  } catch (err) {
    res.status(400).send("Error" + err.message);
  }
};
const profileEdit = async (req, res) => {
  try {
    if (!validateEditProfileData(req)) {
      throw new Error("Invalid Edit Requests");
    }
    const loggedInUser = req.user;
    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));
    await loggedInUser.save();
    res.json({
      message: `${loggedInUser.firstName}, your profile updated successfuly`,
      data: loggedInUser,
    });
  } catch (error) {
    res.status(400).send("Error" + error.message);
  }
};

module.exports = {
  profileEdit,
  profileView,
};
