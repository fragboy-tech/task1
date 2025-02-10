import mongoose from "mongoose";

const { Schema } = mongoose;

export const userSchema = new Schema({
    userName:{
      type: String,
      required: true,
    },
    profilePic: {
        type: String,
        required: false,
    },
    followers: {
        type: [String],
        required: false,
    },
    following:{
        type: [String],
        required: false,
    },
    createdAt:{
        type: Date,
        required: true,
        timestamps: true,
    },
    updatedAt:{
        type: Date,
        required: true,
        timestamps: true,
    },
})
