import express from "express"

const app = express();
app.use(express.json());
const port=3000;

const save = []

app.get("/", (req, res)=>{
    res
    .status(200)
    .json({message:"Running",save})
});

app.post("/register", (req, res)=>{
    const { email, password } = req.body;
    save.push({ email, password });

    res
    .status(200)
    .json({message:"user registered succesfully",email,password});
});

app.listen(port, ()=>{
    console.log(`server is running  http://localhost:${port}`);
})