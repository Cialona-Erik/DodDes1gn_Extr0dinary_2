const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));

app.get('/capabilities.json', (req, res) => {
  res.sendFile(__dirname + '/public/capabilities.json');
});

app.listen(PORT, () => {
  console.log(`Clean Power-Up running at http://localhost:${PORT}`);
});
