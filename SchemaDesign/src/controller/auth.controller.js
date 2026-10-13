import Auth from "../Schema/auth.Schema.js";

export const register = async (req, res) =>{

    try{
        const {email , password } = req.body;
        if(!email || !password){
            return res
            .status(400)
            .json({message:"email and password is required"})
        }

        const isUserExists = await Auth.findOne({ email });
        if(isUserExists){
            return res
            .status(400)
            .json({message:"user already exists"})
        }

        const newUser = new Auth({ email, password});
        await newUser.save();
             res
            .status(201)
            .json({message:"user registerd succesfully"});

        } catch(error){
        res
        .status(500)
        .json({message :"Error"})
    }
    // const {email , password } = req.body;
    // res.status(200).json({message: "user registerd succesfully"})
};

export const login = async (req, res) =>{
    const {email , password } = req.body;
    res.status(200).json({message: "user login succesfully"})
};