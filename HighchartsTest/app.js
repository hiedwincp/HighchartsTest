
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine','ejs')
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(require('./route'));

app.listen(8080, function() {
	console.log('Server running at http://10.10.50.200:8080/');
});






