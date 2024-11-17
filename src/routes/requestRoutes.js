const express = require("express");
const requestRouter = express.Router();

const {userAuth} = require('../middleware/auth')
const {requestStatus, sendingRequest,} = require('../controller/requestController')


requestRouter.post(
  "/send/:status/:toUserId",
  userAuth,
 sendingRequest
);

requestRouter.post(
  "/reviews/:status/:requestId",
  userAuth,
  requestStatus
);

module.exports = requestRouter;