const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(cookieParser());

app.use((req, res, next) => {
  console.log(req.cookies);

  res.cookie('username', 'Anand');
  next();
});

app.get('/about', (req, res) => {
  res.send(`Hello`);
});

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});
