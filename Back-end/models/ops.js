const mongoose = require('mongoose');

const connectionSchema = new mongoose.Schema({
    op_name: {
        type: String,
        required: true
    },
    op_year: {
        type: Number,
        required: true
    },
    op_goal: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    jets_used: {
        type: Array,
        required: true
    },
    op_status: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


module.exports = mongoose.models.Connection || mongoose.model('Connection', connectionSchema);
