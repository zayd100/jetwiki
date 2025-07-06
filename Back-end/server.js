const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(bodyParser.json()); 
app.use("/images", express.static('public/images'));
const newsRoute = require('./routes/news'); // ✅ adjust path if needed
app.use('/api/news', newsRoute);   
const itemsRoute = require('./routes/items');
app.use('/api/items', itemsRoute);

const opsroute = require('./routes/ops');
app.use('/api/ops', opsroute);

const incomeroute = require('./routes/income');
app.use('/api/income', incomeroute);



const girlroute = require("./routes/girls");




app.use('/api/girls', girlroute);




const PORT = 5000;
app.listen(PORT, () => {
    console.log(`jet server is running on port ${PORT}`);
});