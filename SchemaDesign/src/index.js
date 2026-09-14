import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/database.js"
import authRoutes from "./routes/auth.routes.js"

// import dns from "node:dns/promises"
// dns.setServers(["1.1.1.1","8.8.8.8"])

dotenv.config()

const app = express()
const port = process.env.port || 3000;
app.use(express.json());


connectDB();

app.get("/",(req, res)=>{
    res.json({message:"Schema database design "})
});

app.use("/api/v1/auth", authRoutes)

app.listen(port, () =>{
    console.log(`server is running on port http://localhost:${port}`)
})