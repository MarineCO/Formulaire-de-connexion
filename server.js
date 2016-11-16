var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.post('/login', function(req, res) {
	console.log(req.body);

	var user = 'Marine';
	var password = 'mdp';
	var connect = {err: false, message: 'Vous êtes connectée'}
	var error = {err: true, message: 'Erreur d\'identifiant ou de mot de passe'}

	if (req.body.user === user && req.body.password === password) {
		res.send(connect.err);
	}
	else {
		res.send(error.err);
	}
})

app.listen(3003, function() {
	console.log('Listen');
});