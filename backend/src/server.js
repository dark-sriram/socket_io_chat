import express from "express";
import dotenv from "dotenv";

dotenv.config();

import authRoute from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

const app=express();

const PORT=process.env.PORT || 3000;

app.use(express.json());

app.use("/api/auth",authRoute);

app.listen(PORT,()=>{
    console.log("app ooduthu in port:" +PORT);
    connectDB();
})