const express = require("express");
const router = express.Router();
const {profileEdit,profileView} = require("../controller/profileController");
const { userAuth } = require("../middleware/auth");


router.get("/", userAuth,profileView);
router.patch("/", userAuth, profileEdit);

module.exports = router;
