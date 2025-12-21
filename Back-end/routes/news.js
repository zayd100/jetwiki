const express = require('express');
const router = express.Router();
const News = require("../models/news"); // the model name that i had

router.get("/", async (req, res) => {
  try {
    const allNews = await News.find(); // ✅ Use a different variable for data
    res.json(allNews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
