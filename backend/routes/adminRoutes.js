
const express = require('express');
const { adminAuth, adminNotice } = require('../controllers/adminController');
const router = express.Router();

router.post('/auth' , adminAuth)
router.get('/notices', adminNotice)


module.exports = router;
