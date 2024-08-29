
const express = require('express');
const { adminAuth, adminNotice } = require('../controllers/adminController');
const { studentAuth, studentNotice } = require('../controllers/studentController');
const router = express.Router();


router.post('/auth' , studentAuth)
router.get('/notices', studentNotice)



module.exports = router;