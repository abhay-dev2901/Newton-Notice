const bcrypt = require('bcryptjs')
const db = require('../config/db')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

dotenv.config();


exports.adminAuth = async (req,res) => {
    res.status(200).json({message:"This is a admin Auth route"})
}


exports.adminNotice = async (req,res) => {
    res.status(200).json({message:"This is a admin Notice route"})
}
