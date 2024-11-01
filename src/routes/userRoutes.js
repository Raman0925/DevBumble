const express = require("express");
const userRouter = express.Router();
const {
  requestReceived,
  connections,
  feed,
} = require("../controller/userController");
const { userAuth } = require("../middleware/auth");

userRouter.get("/user/requests/received", userAuth, requestReceived);
userRouter.get("/user/connections", userAuth, connections);
userRouter.get("/feed", userAuth, feed);


module.exports = userRouter;
