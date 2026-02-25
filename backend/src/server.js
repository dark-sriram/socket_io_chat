import express from "express";
import dotenv from "dotenv";

dotenv.config();

import authRoute from "./routes/auth.route.js";

const app=express();

const PORT=process.env.PORT || 3000;

app.use("/api/auth",authRoute);

app.listen(PORT,()=>{
    console.log("app ooduthu in port:" +PORT);
})