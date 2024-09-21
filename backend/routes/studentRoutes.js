
const express = require('express');
const {studentNotice, studentSignUp, studentSignIn } = require('../controllers/studentController');
const router = express.Router();


router.post('/signUp' , studentSignUp)
router.post('/signin' , studentSignIn)

module.exports = router