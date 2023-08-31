const express = require('express');
var app = express();
const logger = require('morgan');
const cookieParser = require('cookie-parser');

app.use(logger('dev'));
app.use(cookieParser());

app.use((req, res, next) => {
  console.log(req.cookies);
  res.cookie('count', 1);
  next();
});

app.get('/users', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`<h2>Welcome to Express</h2>`);
});
app.get('/users/:username', (req, res, next) => {
  var username = req.params.username;
  res.setHeader('Content-Type', 'text/html');
  res.send(`<h1>${username}</h1>`);
});

app.use(express.static(`${__dirname}/public/`));
app.get('/', (req, res) => {
  //   res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname + '/index.html');
});
app.get('/projects', (req, res) => {
  //   res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname + '/projects.html');
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/form', (req, res) => {
  res.setHeader('Content-Type', 'text/x-www-form-urlencoded');
  res.send(req.body);
});

app.post('/json', (req, res) => {
  res.setHeader('Content-Type', 'text/text');
  res.send(req.body);
});

console.log(__dirname + '/public/');

// app.use(express.static(__dirname + '/public/'));
// app.use('/index', (req, res, next) => {
//   res.setHeader('Content-Type', 'text/css');
//   next();
// });
// app.get('/index', (req, res, next) => {
//   res.sendFile(__dirname + '/index.html');
// });

app.use('/admin', (req, res, next) => {
  next('Client/server Error');
});

app.use((req, res, next) => {
  res.send(`Error 404 - Page Not found!!`);
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(4000, () => {
  console.log(`Server listening on port 4000`);
});
