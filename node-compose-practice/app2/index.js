// app2/index.js
const express = require('express');

const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send('Hello from App 2 and this is updated 3 times`!');
});

app.listen(port, () => {
  console.log(`App 2 is running on http://localhost:${port}`);
});
