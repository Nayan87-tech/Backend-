import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

console.log("ENV",process.env.MONGODB_URL)

const connectDB = async() =>{
    try{
        const connection = await mongoose.connect(
            `${process.env.MONGODB_URL}/${process.env.DATABASE_NAME}`
        );
        console.log(`MongoDB connected`)
    } catch (error){
        console.error(`error`)
    }
};

export default connectDB;
