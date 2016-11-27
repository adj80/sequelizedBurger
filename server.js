var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


var models = require('./models');

models.sequelize.sync();

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(express.static('app/public'));

app.get('/', function(req, res) {
	models.Burger.findAll();
	.then(function(burger_data) {

		console.log(burger_data);
		res.send(burger_data);

	});

});

var application_controller = require('./controllers/application_controller');

var burgers_controller = require('./controllers/burgers_controller');

app.listen(process.env.PORT || PORT, function() {
	console.log('App listening on PORT ' + PORT);

});