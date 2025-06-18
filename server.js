const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));

// Serve capabilities.json at root for Trello validation
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/capabilities.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(__dirname + '/public/capabilities.json');
});
