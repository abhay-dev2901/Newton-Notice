
const express = require('express');
const { instructorSignUp, InstructorSignIn } = require('../controllers/instructorController');
const router = express.Router();

router.post('/signup' , instructorSignUp)
router.post('/signin', InstructorSignIn)


module.exports = router;