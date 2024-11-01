const express = require("express");
const router = express.Router();
const {signUp,logIn,logOut} = require("../controller/authController");


router.post("/signup", signUp);
router.post("/login", logIn);
router.post("/logout", logOut)

module.exports = router;
