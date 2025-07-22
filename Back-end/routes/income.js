// routes/income.js (CONVERTED to MongoDB)
const express = require('express');
const router = express.Router();
const Income = require('../models/income'); // Import the schema


router.get('/', async (req, res) => {
    try {
        const income = await Income.find();
        res.json(income);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.post('/', async (req, res) => {
    try {
        const newIncome = new Income(req.body);
        const savedIncome = await newIncome.save();
        res.status(201).json(savedIncome);
    } catch (error) {

        res.status(400).json({ error: error.message });

    }
});


router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await Income.findByIdAndDelete(id);
        res.json({ success: true });

    } catch (error) {
    
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;