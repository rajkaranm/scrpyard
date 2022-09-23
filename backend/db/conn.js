const mongoose = require("mongoose");

async function dbConnect(url) {
    try {
        // Connect to the MongoDB cluster
         mongoose.connect(
          url,
          { useNewUrlParser: true, useUnifiedTopology: true },
          () => console.log(" Mongoose is connected")
        );
    
    } catch (e) {
        console.log("could not connect", e);
    }
}

module.exports = dbConnect;