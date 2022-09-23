const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// get driver connection
const dbConnect = require("./db/conn");


const Db = process.env.ATLAS_URI;
dbConnect(Db);

 
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});