const express = require('express');
const { registerUser, authUser } = require('../Controllers/userController');

const router = express.Router();

router.route('/').post(registerUser)  // 1 way of writting by ths way we can chain multiple methods
router.post('/login', authUser)    // other way of writting by this way we cannot chain the methods

module.exports  = router
