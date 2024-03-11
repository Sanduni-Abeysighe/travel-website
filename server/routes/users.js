const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/inquiry/save', userController.saveUser);

module.exports = router;