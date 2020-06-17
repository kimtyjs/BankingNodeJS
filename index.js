if( process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
require("rootpath")();

const express = require("express");
const connectionDB = require("./config/databaseConnection");
const bodyParser = require("body-parser");
const cors = require("cors");

//Initialize App
const app = express();

//Connect to MongoDB
connectionDB();

//Init middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//api routes
app.use('/users', require('./routes/user'));

//route for homepage
app.get('/', (req, res) => res.send("API Running"));


//Set Port
const PORT = process.env.PORT || 8000;

//listen
app.listen(PORT, () => console.log(`server starts on Port ${PORT}`));
