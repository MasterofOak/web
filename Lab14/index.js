const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/Practise-1', (req, res) => {
  res.sendFile(path.join(__dirname, '/index-1.html'));
});
app.get('/Practise-2', (req, res) => {
  res.sendFile(path.join(__dirname, '/index-2.html'));
});
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
