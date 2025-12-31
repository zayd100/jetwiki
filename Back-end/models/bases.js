const mongoose = require("mongoose");

const baseSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Base", baseSchema);
