import Auth from "../schema/auth.schema.js";

export const notes = async (req, res) => {
  try {
    const { title, addnotes } = req.body;
    if (!title || !addnotes) {
      return res.status(400).json({ message: "Title and notes required" });
    }

    const newUser = new Auth({ title, addnotes });
    // console.log(newUser);
    await newUser.save();
    res
    .status(201)
    .json({ message: "Notes added succesfully"});
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getNotes = async (req , res) =>{
  try{
     const notes = await Auth.find()  
     if (notes.length===0){
       return res
       .status(400)
       .json({message:"Empty Notes"})
     }
    console.log(notes)
    res
    .status(200)
    .json({message : "NOTES",notes})
  } catch(error){
       res
       .status(500)
       .json({message: error})
  }
}

