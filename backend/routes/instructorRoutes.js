
const express = require('express');
const { instructorAuth, instructorNotice } = require('../controllers/instructorController');
const router = express.Router();

router.post('/auth' , instructorAuth)
router.get('/notices', instructorNotice)


module.exports = router;