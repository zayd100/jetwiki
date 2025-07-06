const express = require('express');
const router = express.Router();
const Connection = require('../models/ops'); // Adjust path to your schema


router.get('/', async (req, res) => {
    try {
        const ops = await Connection.find();
        res.json(ops);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.post('/', async (req, res) => {
    try {
        const newOp = new Connection(req.body);
        const savedOp = await newOp.save();
        res.status(201).json(savedOp);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await Connection.findByIdAndDelete(id);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;