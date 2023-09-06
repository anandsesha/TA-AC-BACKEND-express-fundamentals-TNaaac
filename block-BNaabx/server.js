const express = require('express');
var app = express();
const currentTime = require('current-time');
// const logger = require('morgan');

app.get('/', (req, res, next) => {
  console.log(
    req.method,
    req.url
    // currentTime('USA').then((data) => console.log(data))
  );
  // console.log(req
});

app.post('/json', (req, res) => {});

app.listen(4000, () => {
  console.log(`Server listening on port 4000`);
});
