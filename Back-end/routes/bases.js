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
router.delete("/:id", async(req,res)=>{
    try{
        const deletedBase = await bases.findByIdAndDelete(req.params.id)
    if(!deletedBase){
        return res.status(404).json({message:"not found"});
    }
    res.json({message:"deleted base!", deletedBase});
    } catch(error){
        console.error("failed to delete the base", error);
        res.status(500).json({message:"error deleting card",error});
    }
});
module.exports = router;