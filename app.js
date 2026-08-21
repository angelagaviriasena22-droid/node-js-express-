const express = require('express');
const app = express();
require("dotenv/config");
const port = process.env.PUERTO || 3000;

app.get('/', (req, res) => {
  res.send('API - Rest Aprendices');
});

app.listen(port, () => {
  console.log(`SERVIDOR http://localhost:${port}`);
});

