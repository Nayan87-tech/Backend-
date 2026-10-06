import mongoose,{Schema} from "mongoose";

const authSchema = new Schema(
    {
     name:{type: String, required: true , unique: true},
     email:{type: String, required: true , unique: true},
     password:{type: String, required: true}
    },
    {
        timestamps: true,
    },
);

const Auth = mongoose.model("Data", authSchema);

export default Auth;