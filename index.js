const express = require("express");
require('dotenv').config();
const app = express();
const { getpifDate, convertBack } = require("./pifDate.js")

PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send(getpifDate())
  });

  app.get('/get-back', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send(convertBack(getpifDate()))
  })

app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`)
  })