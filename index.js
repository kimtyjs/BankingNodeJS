if( process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require("express");
const connectionDB = require("./config/databaseConnection");

//Initialize App
const app = express();

//Connect to MongoDB
connectionDB();

//route for homepage
app.get('/', (req, res) => res.send("API Running"));

//Set Port
const PORT = process.env.PORT || 8000;

//listen
app.listen(PORT, () => console.log(`server starts on Port ${PORT}`));