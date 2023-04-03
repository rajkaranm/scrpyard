const express = require("express");
const app = express();
const cors = require("cors");
const Razorpay = require("razorpay")
require("dotenv").config({ path: "./.env" });


const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());

// get driver connection
const dbConnect = require("./db/conn");

// Models 
const userData = require("./models/userModel")

// Connecting to mongoDB Database
const Db = process.env.ATLAS_URI;
dbConnect(Db);


// Routes
app.use("/product", require("./routes/UserData.route"));
app.use("/", require("./routes/auth.route"));
app.use("/", require("./routes/search.route"));
app.use("/", require("./routes/payment.route"));
 
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
