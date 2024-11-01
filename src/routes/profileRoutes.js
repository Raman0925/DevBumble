const express = require("express");
const router = express.Router();
const {profileEdit,profileView} = require("../controller/profileController");
const { userAuth } = require("../middleware/auth");


router.get("/view", userAuth,profileView);
router.patch("/edit", userAuth, profileEdit);
 
module.exports = router;
