const express = require('express');
var app = express();
const logger = require('morgan');
const cookieParser = require('cookie-parser');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger('dev'));
app.use(cookieParser());

app.use((req, res, next) => {
  console.log(req.cookies);
  res.cookie('count', 1);
  next();
});

app.get('/users/:username', (req, res, next) => {
  var username = req.params.username;
  res.setHeader('Content-Type', 'text/html');
  res.send(`<h1>${username}</h1>`);
});

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`<h2>Welcome to Express</h2>`);
});

app.get('/about', (req, res) => {
  res.send(`My name is qwerty`);
});

app.post('/form', (req, res) => {
  res.setHeader('Content-Type', 'text/x-www-form-urlencoded');
  res.send(req.body);
});

app.post('/json', (req, res) => {
  res.setHeader('Content-Type', 'text/text');
  res.send(req.body);
});

app.use('/admin', (req, res, next) => {
  next('Client/server Error');
});

app.use((req, res, next) => {
  res.send(`Error 404 - Page Not found!!`);
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});
