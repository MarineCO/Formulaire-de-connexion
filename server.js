var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.post('/checkInfo', function(req, res) {
	console.log(req.body);

	var user = 'Marine';
	var password = 'mdp';

	if (req.body.user == user && req.body.password == password) {
		console.log('Connexion réussi')
	}
	else {
		console.log('Erreur d\'utilisateur ou de mot de passe')
	}

})








app.listen(3003, function() {
	console.log('Listen');
});