import express from "express"
import connectDB from "./config/database.js";
import authRoutes from "./routes/auth.routes.js"
import dotenv from "dotenv"

import dns from "node:dns/promises"
dns.setServers(["1.1.1.1","8.8.8.8"])

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json());

dotenv.config()

connectDB()


app.get("/", (req ,res) =>{
    res.json({message:"Schema Design Register"})
});

app.use("/api/v1/auth", authRoutes); 

app.listen(PORT, () =>{
    console.log(`server is running on port http://localhost:${PORT}`);

})