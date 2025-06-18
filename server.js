const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));

// Let Trello validate the Power-Up
app.get('/capabilities.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(__dirname + '/public/capabilities.json');
});

// Optional: serve something at root
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// IMPORTANT: listen on 0.0.0.0 so Render can expose the port
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
