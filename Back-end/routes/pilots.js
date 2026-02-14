// routes /pilots.js
const express = require('express');
const router = express.Router();
const pilot = require('../models/pilots');
const { default: mongoose } = require('mongoose');

//GET request, using async
router.get('/', async (req,res)=>{
    try{
        const Pilots = await pilot.find();
        res.json(Pilots);
    }   catch(error){
        res.status(500).json({error:error.message});
    }
});
//OTHER API AFTER MAKING THE PILOTS DISPLAY IN MY UI.
module.exports=router;