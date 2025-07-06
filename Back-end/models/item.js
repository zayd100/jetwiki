const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  founded: { type: Number, required: true },
  specialization: { type: String, required: true },
  headquarters: { type: String, required: true },
  notableproject: { type: String, required: true },
   image: {
        type: String,
        required: true
    }
  
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);