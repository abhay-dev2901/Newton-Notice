const bcrypt = require('bcryptjs')
const db = require('../config/db')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

dotenv.config();


exports.instructorAuth = async (req,res) => {
    res.status(200).json({message:"This is a instructor Auth route"})
}


exports.instructorNotice = async (req,res) => {
    res.status(200).json({message:"This is a instructor Notice route"})
}

