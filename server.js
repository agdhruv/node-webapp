const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');

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
	res.render('about.hbs');
});

app.get('/bad', (req, res) => {
	res.send({
		errorMessage: 'Error handling request'
	}); // passing a JS Object to the send automatically sends JSON data to the browser
});

app.listen(3000, () => {
	console.log('Server is up on port 3000.');
});