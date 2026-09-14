import mongoose, {schema} from "mongose";

const authSchema = new Schema(
    {
      email: {type: string, required: true ,unique: true },
      password: {type: string, required: true ,unique: true }
    },
    {
        timestamps: true,
    },
)

const Auth = mongoose.model("Auth", authSchema);

export default Auth;