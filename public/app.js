(function() {
	"use strict";

	var app = {

		init: function() {
			this.listeners();
		},

		listeners: function() {
			$('#connexion').on('click', this.submit.bind(this))
			$('form').on('submit', function(event) {
				event.preventDefault();
			});
		},

		submit: function() {
			var user = $('#user').val();
			console.log(user);

			var password = $('#password').val();
			console.log(password);

			$.ajax({
				url: '/checkInfo',
				type: 'POST',
				data: {
					'user' : user,
					'password' : password
				},
				dataType: 'html'
			})
			.done(function() {
				console.log('success');
			})
			.fail(function() {
				console.log('fail');
			});

		},

		display: function() {
			// vider les input - remettre tt à 0
		},



	};

	$(document).ready(function(){
		app.init();
	});
})();  