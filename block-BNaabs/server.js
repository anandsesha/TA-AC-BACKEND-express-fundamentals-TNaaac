const express = require('express');
var app = express();

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
  //   next(); //giving next() here wont render new.html in next .get route middleware
});

app.get('/new', (req, res, next) => {
  res.sendFile(__dirname + '/new.html');
});

app.get('/new', (req, res, next) => {
  res.sendFile(__dirname + '/new.html');
});

app.use(express.json());
app.post('/new', (req, res, next) => {
  console.log(req.body);
  res.json(req.body);
});

app.get('/users/:username', (req, res) => {
  var username = req.params.username;
  res.send(username);
});

app.listen(3000, () => {
  console.log(`Server Listening on port 3000`);
});
