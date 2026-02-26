import express from "express";
import { ENV } from "./lib/env.js";

import authRoute from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

const app=express();

const PORT=ENV.PORT || 3000;

app.use(express.json());

app.use("/api/auth",authRoute);

app.listen(PORT,()=>{
    console.log("app ooduthu in port:" +PORT);
    connectDB();
})