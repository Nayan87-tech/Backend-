import express from "express"
import dotenv from "dotenv"
import notesDB from "./config/database.js"
import authRoute from "./routes/auth.routes.js"
import multer from "multer"
import { uploadFileToImage } from "./sevice/storage.js"

dotenv.config()

const app = express()
const port = process.env.port || 3001;
app.use(express.json());

notesDB();

const upload = multer({ Storage: multer.memoryStorage()})

app.post("/upload", upload.single("file"), async(req, res) =>{
    console.log("1", req.file)
    console.log("2", req.body)
    const upload = await uploadFileToImage(
        req.file.buffer,
        req.file.originalname,
    );

    // const buf = req.file
    // console.log(upload)
    res.json({ message : "File Uploaded Succesfully"})
})

app.get("/",(req, res)=>{
    res.json({message:"Notes APP"})
});

app.use("/api/v1/auth", authRoute)

app.listen(port, () =>{
    console.log(`server is running on port http://localhost:${port}`)
})