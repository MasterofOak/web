const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/flex', (req, res) => {
  res.sendFile(path.join(__dirname, '/flex.html'));
});
app.get('/grid', (req, res) => {
  res.sendFile(path.join(__dirname, '/grid.html'));
});
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
