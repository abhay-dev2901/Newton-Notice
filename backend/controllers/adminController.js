const bcrypt = require('bcryptjs')
const db = require('../config/db')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken');
const { Prisma, PrismaClient } = require('@prisma/client');



dotenv.config();

const prisma = new PrismaClient

exports.adminSignUp = async (req, res) => {
    const {name, email, adminId, password} = req.body;

    try{
        const existingAdmin = await prisma.admin.findUnique({
            where : {email : email}
        })

        if(existingAdmin){
            res.status(400).json({message: 'Email already in use'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newAdmin = await prisma.admin.create({
            data: {
                AdminId: adminId,
                name: name,
                email: email,
                password: hashedPassword
            }
        })

        return res.status(201).json({message: "Admin Signed up successfully" , admin: newAdmin})


    }catch(error){
        console.error(error);
        return res.status(500).json({error:"something went wrong"})
    }
}


exports.adminSignIn = async (req, res) => {
    const {AdminId, password} = req.body;
    console.log(req.body)

    try{
        const Admin = await prisma.admin.findUnique({
            where : {AdminId:AdminId},
        })

        if(!Admin){
            return res.status(401).json({message:"Invalid email or password"})
        }

        const isPasswordValid = await bcrypt.compare(password,Admin.password)

        if (!isPasswordValid){
            return res.status(401).json({message: "Invalid email or password"})
        }

        const token = jwt.sign(
            {AdminId: Admin.AdminId, email: Admin.email},
            process.env.JWT_SECRET,
            {expiresIn: '1h'}
        )

        return res.status(200).json({message:"Sign in Successful" , token:token})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({error: 'Something went wrong'})
    }
    
}



exports.adminNotice = async (req,res) => {
    res.status(200).json({message:"This is a admin Notice route"})
}
