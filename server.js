const express = require('express');

var app = express();

app.get('/', (req, res) => {
	// res.send('<h2>Hello Express!</h2>');
	res.send({
		name: 'Andrew',
		likes: [
			'Tennis',
			'Badminton'
		]
	});
});

app.get('/about', (req, res) => {
	res.send('About page');
});

app.get('/bad', (req, res) => {
	res.send({
		errorMessage: 'Error handling request'
	});
});

app.listen(3000);