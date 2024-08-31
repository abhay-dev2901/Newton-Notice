const bcrypt = require('bcryptjs')
const db = require('../config/db')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken');
const { Prisma, PrismaClient } = require('@prisma/client');

dotenv.config();

const prisma = new PrismaClient



exports.instructorSignUp = async (req,res) => {
    const {name, email, InstructorId , password} = req.body;

    try{
        const existingInstructor = await prisma.student.findUnique({
            where: { email: email },
        })

        if(existingInstructor){
            return res.status(400).json({error: 'Email is already in use' })
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const newInstructor = await prisma.instructor.create({
            data: {
                InstructorId: InstructorId,
                name: name,
                email: email,
                password: hashedPassword
            }
        })

        return res.status(201).json({message: "Instructor Signed up successfully" , instructor: newInstructor})

    }
    catch(error){
        console.error(error);
        return res.status(500).json({error:"something went wrong"})
    }
    
}

exports.InstructorSignIn = async (req, res) => {
    const {email, password} = req.body;

    try{
        const Instructor = await prisma.instructor.findUnique({
            where : {email:email},
        })

        if(!Instructor){
            return res.status(401).json({message:"Invalid email or password"})
        }

        const isPasswordValid = await bcrypt.compare(password,Instructor.password)

        if (!isPasswordValid){
            return res.status(401).json({message: "Invalid email or password"})
        }

        const token = jwt.sign(
            {InstructorId: Instructor.InstructorId, email: Instructor.email},
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




exports.instructorNotice = async (req,res) => {
    res.status(200).json({message:"This is a instructor Notice route"})
}

