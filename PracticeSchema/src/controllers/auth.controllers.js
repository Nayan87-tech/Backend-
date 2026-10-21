import Auth from "../schemas/auth.schemas.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req , res) => {
 try{
     const {name , email , password } = req.body;

     if(!email || !password){
        return res
        .status(400)
        .json({message:"email and password is required"});
     }
     const isUserExists = await Auth.findOne({ email });

   // password hash:-
   const hashPassword = await bcrypt.hash(password,10);

     if(isUserExists){
        return res
        .status(400)
        .json({message:"user already exists"})
     }

    const newUser = new Auth({name , email , password: hashPassword});
    await newUser.save()

    const token = jwt.sign({ id:newUser._id},process.env.JWT_SECRET,{ expiresIn: "2h" })
    res
    .status(201)
    .cookie("token",token, {
      httpOnly: true,
      expires:new Date(Date.now() + 3600000),
    })
    .json({message:"user register succesfully",token})
    
 } catch(error){
    res .status(500).json({message:"Server Down"})
 }
}

export const login = async (req , res) => {
      try{
         const { email , password } = req.body;
         if(!email || !password){
            return res
            .status(400)
            .json({message:"email and password is required"})
         }

         const isUserExists = await Auth.findOne({email});
         if(!isUserExists){
            return res
            .status(400)
            
            .json({message:"user not exists"})
         }

         // password hash :-
         const isMatch = await bcrypt.compare(password, isUserExists.password);
         const token = jwt.sign({ id:isUserExists._id },process.env.JWT_SECRET,{ expiresIn: "2h" })

         if(!isMatch){
            return res
            .status(400)
            .cookie("token",token, {
               httpOnly: true,
               expires:new Date(Date.now() + 3600000), })
            .json({message:"incorrect password"}) 
         }
          res
         .status(200)
         .json({message:"logged In Succesfully",token})

         
      } catch(error){
    res .status(500).json({message:"Server Down"})
 }
}