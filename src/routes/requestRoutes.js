const express = require("express");
const requestRouter = express.Router();

const {userAuth} = require('../middleware/auth')
const {requestStatus, sendingRequest,} = require('../controller/requestController')


requestRouter.post(
  "/request/send/:status/:toUserId",
  userAuth,
 sendingRequest
);

requestRouter.post(
  "/request/review/:status/:requestId",
  userAuth,
  requestStatus
);

module.exports = requestRouter;