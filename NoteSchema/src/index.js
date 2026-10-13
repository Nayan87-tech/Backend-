import express from "express"
import dotenv from "dotenv"
import notesDB from "./config/database.js"
import authRoute from "./routes/auth.routes.js"

dotenv.config()

const app = express()
const port = process.env.port || 3001;
app.use(express.json());

notesDB();

app.get("/",(req, res)=>{
    res.json({message:"Notes APP"})
});

app.use("/api/v1/auth", authRoute)

app.listen(port, () =>{
    console.log(`server is running on port http://localhost:${port}`)
})