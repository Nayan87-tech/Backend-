import Auth from "../schema/auth.schema.js";
import jwt from "jsonwebtoken"

export const notes = async (req, res) => {
  try {
    const { title, addnotes } = req.body;
    if (!title || !addnotes) {
      return res.status(400).json({ message: "Title and notes required" });
    }

    const newUser = new Auth({ title, addnotes });
    // console.log(newUser);
    await newUser.save();
  
    const token = jwt.sign({ id: newUser._id},process.env.JWT_SECRET,{expiresIn: "2h"})

    res
    .status(201)
    .cookie("token",token, {
      httpOnly: true,
      expires:new Date(Date.now() + 3600000),
    })
    .json({ message: "Notes added succesfully",token});
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
