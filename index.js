const express = require("express");

//Initialize App
const app = express();

//route for homepage
app.get('/', (req, res) => res.send("API Running"));

//Set Port
const PORT = process.env.PORT || 8000;

//listen
app.listen(PORT, () => console.log(`server starts on Port ${PORT}`));