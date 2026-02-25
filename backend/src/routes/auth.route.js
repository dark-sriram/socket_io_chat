import express from "express";

const router=express.Router();

router.get("/signup",(req,res)=>{
    res.send("hi bro");
})

router.get("/login",(req,res)=>{

})

router.get("/logout",(req,res)=>{

})

export default router;
