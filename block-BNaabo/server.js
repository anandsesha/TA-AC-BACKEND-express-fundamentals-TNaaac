const express = require('express');
var app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

console.log(__dirname + '/public');
// F:\AltCampus\ExpressJS\TA-AC-BACKEND-express-fundamentals-TNaaac\block-BNaabo/public

app.use(express.static(__dirname + '/public'));

app.post('/json', (req, res, next) => {
  console.log(req.body);
  res.send(`Json data recieved as post req`);
});

app.post('/contact', (req, res, next) => {
  console.log(req.body);
  res.send(`Form data recieved as post req`);
});

app.get('/images', (req, res, next) => {
  //   res.sendFile(`${__dirname}/public/style.css`); // css not accessible
  res.send(
    `Image 1 and 2 served to browser on GET request to /images/img1.jpg or /images/img12.jpg !!`
  );
});
app.listen(3000, () => {
  console.log(`Server Listening on port 3000`);
});
