const express = require('express');
var app = express();

app.get(`/`, (req, res) => {
  // console.log(req);
  // console.log(res);
  res.send(`<h1>Welcome in HTML type response</h1>`);
});

app.listen(3000, () => {
  console.log(`Server running at port 3000`);
});
