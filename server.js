const express = require('express');

var app = express();

// Make static web server to avoid creating routes for every static file
app.use(express.static(__dirname + '/public')); // use method helps use Express Middleware like express.static()

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

app.listen(3000, () => {
	console.log('Server is up on port 3000.');
});