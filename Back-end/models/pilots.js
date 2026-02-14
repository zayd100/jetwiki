const mongoose = require('mongoose');
const pilotSchema = new mongoose.Schema({
name: {type: String, required: true},
status:{type: String, required:true},
country:{type:String, required:true},
kills:{type: Number, required:false},
awards:{type: String, required:false},


}, {timestamps: true})
module.exports=mongoose.model(`pilot`, pilotSchema);