import mongoose, {Schema} from "mongoose";

const authSchema = new Schema(
    {
      email: {type: String, required: true ,unique: true },
      password: {type: String, required: true}
    },
    {
        timestamps: true,
    },
)

const Auth = mongoose.model("Auth", authSchema);

export default Auth;