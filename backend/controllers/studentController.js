const bcrypt = require('bcryptjs')
const db = require('../config/db')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken');
const { Prisma, PrismaClient } = require('@prisma/client');

dotenv.config();

const prisma = new PrismaClient


exports.studentSignUp = async (req,res) => {
    const {name, email, enrollmentId , password} = req.body;

    try{
        const existingStudent = await prisma.student.findUnique({
            where: { email: email },
        })

        if(existingStudent){
            return res.status(400).json({error: 'Email is already in use' })
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const newStudent = await prisma.student.create({
            data: {
                enrollmentId: enrollmentId,
                name: name,
                email: email,
                password: hashedPassword
            }
        })

        return res.status(201).json({message: "Student Signed up successfully" , student: newStudent})

    }
    catch(error){
        console.error(error);
        return res.status(500).json({error:"something went wrong"})
    }
}


exports.studentSignIn = async (req, res) => {
    const {email, password} = req.body;

    try{
        const student = await prisma.student.findUnique({
            where : {email:email},
        })

        if(!student){
            return res.status(401).json({message:"Invalid email or password"})
        }

        const isPasswordValid = await bcrypt.compare(password,student.password)

        if (!isPasswordValid){
            return res.status(401).json({message: "Invalid email or password"})
        }

        const token = jwt.sign(
            {enrollmentId: student.enrollmentId, email: student.email},
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



exports.studentNotice = async (req,res) => {
    res.status(200).json({message:"This is a student Notice route"})
}



