import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const appNotes = async() =>{
    try{
        const connection = await mongoose.connect(`${process.env.MONGODB_URL}${process.env.DATABASE_NAME}`);
        console.log(`MongoDB connected`)
    }catch(error){
        console.error(`error`,error)
    }
}

export default appNotes;