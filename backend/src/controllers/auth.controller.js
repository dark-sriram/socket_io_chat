import User from "../models/User.js"
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/utils.js";


export const signup=async(req,res)=>{
    const {fullName,email,password}=req.body;

    try {
        if(!fullName || !email || !password){
            return res.status(400).json({message:"all fields are required"});
        }
        if(password<6){
            return res.status(400).json({message:"password mustbe longer than 6 characters"})
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({message:"invalid email"})
        }

        
        const user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "Email already exists" });

        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        const newUser=new User({
            fullName,
            email,
            password:hashedPassword,
        })

        if(newUser){
            const savedUser=await newUser.save();
            generateToken(savedUser._id,res)
            res.send(newUser);
        }

    } catch (error) {
        console.error(error);
    }
}

export const login=async(req,res)=>{

}

export const logout=async(req,res)=>{

}