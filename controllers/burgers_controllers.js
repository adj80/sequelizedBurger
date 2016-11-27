var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	models.burger.findAll

	.then(function(burgers) {

	res.render('burgers/index')
	})	

});

router.post('/create', funtion(req, res) {
	models.burger.create({
	name: req.body.name,
	devoured: req.body.devoured
})
 .then(function() {
	res.redirect('/');
 })
});

module.exports = router;
