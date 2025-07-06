const mongoose = require("mongoose");
const girlsSchema  = new mongoose.Schema({
    jetname: {
        type: String,
        required: true
    },
    pse: {
        type: String,
        required: true
    },
    features: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    kills: {
        type: Number,
        required: true
    },
    likeher: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    eth: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        default: "-"
    }
}, {
    timestamps: true
})
module.exports = mongoose.model("girl",girlsSchema);

