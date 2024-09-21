
const express = require('express');
const {adminSignUp, adminSignIn } = require('../controllers/adminController');
const router = express.Router();

router.post('/signup' , adminSignUp)
router.get('/signin', adminSignIn)


module.exports = router;
