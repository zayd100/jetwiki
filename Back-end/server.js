const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors({
  origin: ["https://jetwiki.vercel.app", "http://localhost:5173"],
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true
}));
app.use(bodyParser.json());
app.use("/images", express.static("public/images"));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

app.use('/api/items', require('./routes/items'));
app.use('/api/ops', require('./routes/ops'));
app.use('/api/income', require('./routes/income'));
app.use('/api/girls', require('./routes/girls'));

module.exports = app;