const express = require("express");
const userRouter = express.Router();
const {
  requestReceived,
  connections,
  feed,
} = require("../controller/userController");
const { userAuth } = require("../middleware/auth");

userRouter.get("/users/requests/received", userAuth, requestReceived);
userRouter.get("/users/connections", userAuth, connections);
userRouter.get("/feed", userAuth, feed);


module.exports = userRouter;
