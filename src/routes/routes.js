import express from "express";
import { User } from "../db/models/user.js";
import { Post } from "../db/models/post.js";
import { Comment } from "../db/models/comment.js";
import { Router } from "express";

const route = Router()

route.post("/user", async (req, res) => {
try {
    await User.create({
    userName: "Tommy76",
    profilePic: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.empireonline.com%2Fmovies%2Ffeatures%2Fking-kong-film-original-skull-island%2F&psig=AOvVaw2Sk_Rl0hHJZm0JpwuunEPk&ust=1739270464273000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLi9_cn1uIsDFQAAAAAdAAAAABAx",
    followers: ["{}"],
    following: ["{}"],
    createdAt: new Date('2022-06-01'),
    updatedAt: new Date('2024-04-30'),
    });
    res.send("success");
} catch (e) {
    res.send(`error: ${e.message}`);
}
});
route.post("/post", async (req, res) => {
    try {
      await Post.create({
        caption: " ",
        imageUrl: "https://www.facebook.com/photo/?fbid=8934128586619770&set=a.150985821600801" ,
        user: "Munkhjin",
        likes:[" "],
        comments:[" "],
        createdAt: new Date('1982-06-01'),
        updatedAt: new Date('2025-04-30'),
      });
      res.send("success");
    } catch (e) {
      res.send(`error: ${e.message}`);
    }
  });
  route.post("/comment", async (req, res) => {
    try{
        await Comment.create({
            user: "bat",
            text: "hohohoh",
            createdAt: new Date("2002-02-19"),
        });
        res.send("success");
    }catch (e) {
        res.send(`error: ${e.message}`);
    }
});

route.get("/users", async (req, res) => {
  const { userid } = req.query;

  if (!userid) {
    res.json({ success: false, message: "userid required" });
  }

  const users = await User.findOne({ _id: { $eq: userid } });

  res.json({ success: true, data: { users } });
});
 
route.put("/profile", async (req, res) =>{
  const {userid, userName} = req.query;



  if(!userid){
    res.json({ success: false, message: "userid required"});
  }

  const users = await User.updateOne({_id:{$eq: userid}}, {$set : {userName: userName}});
  res.json({ success: true, users});
});
route.post("/follow", async (req, res) =>{
    const {userid, userName} = req.query;
  
  
  
    if(!userid){
      res.json({ success: false, message: "userid required"});
    }
  
    const users = await User.updateOne({_id:{$eq: userid}}, {$push : {followers: userName}});
    res.json({ success: true, users});
});

route.get("/followers", async (req, res) => {
  const { userid } = req.query;

  if (!userid) {
    res.json({ success: false, message: "userid required" });
  }

  const users = await User.findOne({ _id: { $eq: userid } });

  res.json({ success: true, data:  users.followers });
});
 
export {route};