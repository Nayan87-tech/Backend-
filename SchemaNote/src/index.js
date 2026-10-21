import express from "express"
import dotenv from "dotenv"
import appNotes from './config/database.js'
import noteRoute from './routes/note.routes.js'
dotenv.config();

const app = express()
const port = process.env.port || 3001;
app.use(express.json());

appNotes();


app.get("/",(req, res)=>{
    res.json({message:"Notes APP"})
});

app.use("/api/v1/noteapp", noteRoute)

app.listen(port, () =>{
    console.log(`server is running on port http://localhost:${port}`)
})