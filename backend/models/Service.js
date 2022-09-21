import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }

},
{timestamps: true}
)