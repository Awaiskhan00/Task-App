const mongoose = require("mongoose");

const connectionURL = process.env.MONGODB_URL;

mongoose.connect(connectionURL);

// mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }