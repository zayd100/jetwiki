// routes/items.js (CONVERTED to MongoDB)
const express = require('express');
const router = express.Router();
const Item = require('../models/item'); // Import the schema

// GET all items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST new item
router.post('/', async (req, res) => {
    try {
        const newItem = new Item(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE item
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await Item.findByIdAndDelete(id);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

