var express = require('express');
var app = express();
var placesController = require('./placesController');
const PORT = 8080;

app.set('views', './views');
app.set('view engine', 'ejs');

// request
//  ||
//  ||
//  \/
function myLogger(req, res, next) {
  console.log('request ' + req.method + ' ' + req.path )
  next();
}
// 
app.use(myLogger)
//  ||
//  ||
//  \/
app.get('/', function(req, res) {
  // send is for strings  
  res.send('hello again express');
});
//  ||
//  \/
app.get('/about', function(req, res) {
  // render is for templates
  res.render('about');
})
//  ||
//  \/
// callback signature
app.get('/api/places', placesController.index)
//  ||
//  \/
app.use(function(req, res, next) {
  res.send('wrong way go back');
})


app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});