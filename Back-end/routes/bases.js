const express = require('express');
const router = express.Router();
const bases = require("../models/bases");

router.get("/", async(req,res)=>{
    try{
        const base = await bases.find();
        res.json(base);
    } catch(error){
        res.status(500).json({message:error.message});
    }
});

router.post("/",async(req,res)=>{
try{
    console.log("incoming POST data:", req.body);
    const newbase = new bases(req.body);
    const saved = await newbase.save();
    res.status(201).json(saved);
} catch(error){
    console.error("error", error);
    res.status(500).json({message:"error"});
}

});

module.exports = router;