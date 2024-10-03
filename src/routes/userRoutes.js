const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')

router.get('/users',userController.getallUsers)

module.exports = router