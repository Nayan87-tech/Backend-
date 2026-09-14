import express from "express";

const app = express();
app.use(express.json());
const port=3001;

const notes=[]
app.post("/notes", (req, res) =>{
    const data = req.body;

    notes.push(data);
    res
    .status(200)
    .json({message:"notes added successfully",data});
})

app.get("/note", (req, res)=>{
    res
    .status(200)
    .json({message:"All Notes",notes})
})

app.listen(port, ()=>{
    console.log(`server is running http://localhost:${port}`);
})