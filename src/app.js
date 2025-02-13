import express from "express";
import { route as userRoutes } from "./routes/routes.js";

const app = express();

app.use("/users", userRoutes);

export {app}