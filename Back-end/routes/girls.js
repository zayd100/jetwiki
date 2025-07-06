const express = require('express');
const router = express.Router();
const girls = require("../models/girls");

router.get("/", async (req, res) => {
  try {
    const girl = await girls.find();
    res.json(girl);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post("/", async (req, res) => {
  try {
    console.log("📨 Incoming POST data:", req.body); // Log the received data
    const newGirl = new girls(req.body);
    const saved = await newGirl.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("❌ Failed to save:", error);
    res.status(500).json({ message: "Error saving to database", error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedGirl = await girls.findByIdAndDelete(req.params.id);
    if (!deletedGirl) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.json({ message: "Jet entry deleted successfully", deletedGirl });
  } catch (error) {
    console.error("Failed to delete:", error);
    res.status(500).json({ message: "Error deleting card", error });
  }
});

module.exports = router;
