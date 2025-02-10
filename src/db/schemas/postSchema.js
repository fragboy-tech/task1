import mongoose from "mongoose";

const {Schema} = mongoose;

export const postSchema = new Schema({
    caption:{
        type: String,
        required: false,
    },
    imageUrl:{
        type: String,
        required: true,
    },
    user:{
        type: String,
        required: true,
    },
    likes:{
        type: [String],
        required: false,
    },
    comments:{
        type: [String],
        required: false,
    },
    createdAt:{
        type: Date,
        required: true,
    },
    updatedAt:{
        type: Date,
        required: true,
    }

})
