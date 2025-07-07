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


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

const newsRoute = require('./routes/news');
app.use('/api/news', newsRoute);

const itemsRoute = require('./routes/items');
app.use('/api/items', itemsRoute);

const opsroute = require('./routes/ops');
app.use('/api/ops', opsroute);

const incomeroute = require('./routes/income');
app.use('/api/income', incomeroute);

const girlroute = require("./routes/girls");
app.use('/api/girls', girlroute);

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});


module.exports = app;
