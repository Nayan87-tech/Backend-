import Note from "../schema/note.schema.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { uploadFileToImage } from "../service/storage.js";


export const notes = async (req,res) => {
 try{
    const{ title ,name , email , password , phoneNo , address, addNotes , gender} = req.body;
    // image upload
    const FileUpload = req.file;
    // console.log("FileUpload",FileUpload)

    if(!name || !email || !password){
         return res
         .status(400)
         .json({ message: "Name,E-mail And password Are Required" });
        }   

    const isUserExists = await Note.findOne({name, email});
    // password hash:-
       const hashPassword = await bcrypt.hash(password,10);
    if(isUserExists){
        res
        .status(400)
        .json({ message:"USER ALREADY EXSISTS"})
    }
    // image upload
    const uploadFile = await uploadFileToImage(FileUpload.buffer, FileUpload.originalname);
    // console.log(uploadFile)

    const newUser = new Note ({ title, name, email , password:hashPassword, phoneNo, address, addNotes, gender, image:uploadFile.url });
    await newUser.save();

    const token = jwt.sign({ id:newUser._id},process.env.JWT_SECRET,{ expiresIn: "2h" })
    res
    .status(200)
    .cookie("token",token, {
      httpOnly: true,
      expires:new Date(Date.now() + 3600000),
    })
    .json({ message: "YOUR INFORMATION ADDED SUCCESFULLY" }); 
    } catch(error){
    res.status(500).json({ message: error })
}
}



