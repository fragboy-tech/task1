import dotenv from "dotenv";
import mongoose from "mongoose";
import {app} from "./app.js";

dotenv.config();

const port = process.env.PORT || 3000;
const url = process.env.DATABASE_URL ; 


mongoose.connect(url).then(() => {
    console.log("mongo connected")
}).catch((e)=>{
    console.log(e)
});


app.listen(port, () => {
    console.log(`app running on ${port}`)
});

