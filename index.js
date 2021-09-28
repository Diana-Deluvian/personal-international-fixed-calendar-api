const express = require("express");
require('dotenv').config();
const app = express();
const pifDate = require("./pifDate.js")

PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send(pifDate)
  });


app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`)
  })