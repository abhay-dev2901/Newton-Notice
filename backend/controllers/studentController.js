const bcrypt = require('bcryptjs')
const db = require('../config/db')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

dotenv.config();


exports.studentAuth = async (req,res) => {
    const {name, email, phn, enrollmentId , password, confirmPassword} = req.body;
    res.status(200).json({message:"This is a student Auth route"})
}


exports.studentNotice = async (req,res) => {
    res.status(200).json({message:"This is a student Notice route"})
}



