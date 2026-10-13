import mongoose, { Schema } from "mongoose";

const authSchema = new Schema(
  {
    title: { type: String, required: true },
    addnotes: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const Auth = mongoose.model("Note", authSchema);

export default Auth;
