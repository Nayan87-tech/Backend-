import Auth from "../schemas/auth.schemas.js";

export const register = async (req , res) => {
 try{
     const {name , email , password } = req.body;
   //   console.log("CREDS", name , email , password)

     if(!email || !password){
        return res
        .status(400)
        .json({message:"email and password is required"});
     }
     const isUserExists = await Auth.findOne({ email });
   //   console.log("USER_DB", isUserExists)


     if(isUserExists){
        return res
        .status(400)
        .json({message:"user already exists"})
     }

    const newUser = new Auth({name , email , password });
   //  console.log("DB", newUser);
    await newUser.save()
    res
    .status(201)
    .json({message:"user register succesfully"})
    
 } catch(error){
    res .status(500).json({message:"Server Down"})
 }
}