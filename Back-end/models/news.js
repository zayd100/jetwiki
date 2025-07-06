const mongoose = require('mongoose');

const new_schema = new mongoose.Schema({

   image: {
        type: String,
        required: true
    },
    headline: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
  
}, { timestamps: true });

module.exports = mongoose.model('news', new_schema);