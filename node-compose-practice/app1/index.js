// app1/index.js
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello from App 1!');
});

app.get('/fetch', async (req, res) => {
  try {
    const response = await axios.get('http://app2:3002/');
    res.send(`App 1 fetched: ${response.data}`);
  } catch (error) {
    res.status(500).send('Error fetching from App 2');
  }
});

app.listen(port, () => {
  console.log(`App 1 is running on http://localhost:${port}`);
});
