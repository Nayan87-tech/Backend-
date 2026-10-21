import mongoose, {Schema} from "mongoose";

const NoteSchema = new Schema(
    {
        title : { type:String },
        name : { type:String , required:true, unique:true, trim:true},
        email : { type:String , required:true, unique:true, trim:true},
        password : {type:String, trim:true},
        phoneNo : { type:Number , trim:true},
        address : { type:String },
        addNotes: { type:String , required:true},
        gender : {type:String, enum:["Male","Female","others","not disclosed"], default:"not disclosed"},
        image : {type:String, default:""}
    },
    {
        timestamps: true,
    }
)

const Note = mongoose.model("NoteDesign",NoteSchema)

export default Note;