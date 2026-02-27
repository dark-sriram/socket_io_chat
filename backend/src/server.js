import express from "express";
import { ENV } from "./lib/env.js";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js"
import { connectDB } from "./lib/db.js";
import cors from "cors";

const app=express();

const PORT=ENV.PORT || 3000;

app.use(express.json());
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}));
app.use(cookieParser());

app.use("/api/auth",authRoute);
app.use("/api/messages", messageRoutes);

app.listen(PORT,()=>{
    console.log("app ooduthu in port:" +PORT);
    connectDB();
})