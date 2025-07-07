const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();


app.use(cors({
  origin: "https://jetwiki.vercel.app",
  methods: ["GET", "POST"],
  credentials: true
}));


app.use(bodyParser.json());
app.use("/images", express.static('public/images'));


app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});


async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI); 
    console.log("✅ Connected to MongoDB");

    app.use('/api/news', require('./routes/news'));
    app.use('/api/items', require('./routes/items'));
    app.use('/api/ops', require('./routes/ops'));
    app.use('/api/income', require('./routes/income'));
    app.use('/api/girls', require('./routes/girls'));

  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

startServer();

module.exports = app;
