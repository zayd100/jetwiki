const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
  type: { type: String, required: true },
  amount: { type: Number, required: true },
  curve: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Income', incomeSchema);