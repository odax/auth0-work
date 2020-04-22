const express = require("express");
const app = express();
const http = require("http").Server(app);
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routeProfiles = require("./routes/profiles");

//middleware
app.use(cors());
app.use("/api/profile", routeProfiles);


mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("connected to database!")
);

//END REST API

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
