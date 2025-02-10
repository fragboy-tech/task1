import mongoose from "mongoose";

import { postSchema } from "../schemas/postSchema.js";
export const Post = mongoose.model("Post", postSchema);