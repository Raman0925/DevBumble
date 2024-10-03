const express = require('express');
const router = express.Router();
const authController = require('../controller/userController')

router.get('/users',authController.auth)

module.exports = router