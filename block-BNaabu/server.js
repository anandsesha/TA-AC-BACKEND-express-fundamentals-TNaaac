const express = require('express');
var app = express();

app.get('/', (req, res, next) => {
  res.send(`Root`);
});

app.get('/about', (req, res, next) => {
  res.send(`About`);
});

app.get('/admin', (req, res, next) => {
  next('Unauthorized at /admin');
});

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`<h1>Error 404 Page not found</h1>`);
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log(`Server Listening on port 3000`);
});
