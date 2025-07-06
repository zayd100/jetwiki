const express = require('express');
const router = express.Router();
const News = require("../models/news"); // ✅ Use proper model name

router.get("/", async (req, res) => {
  try {
    const allNews = await News.find(); // ✅ Use a different variable for data
    res.json(allNews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
