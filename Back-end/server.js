const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // or remove this if no frontend
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true
}));
// Increase body size limit to 10mb (adjust as needed)
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use("/images", express.static("public/images"));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connection success!"))
.catch(err => console.error("MongoDB connection error:", err));

// Routes
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

app.use('/api/items', require('./routes/items'));
app.use('/api/ops', require('./routes/ops'));
app.use('/api/income', require('./routes/income'));
app.use('/api/girls', require('./routes/girls'));


// Run the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
