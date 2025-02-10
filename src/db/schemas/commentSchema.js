import mongoose from "mongoose";

const {Schema} = mongoose;

export const commentSchema = new Schema({
    user:{
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        required: true,
    }
});