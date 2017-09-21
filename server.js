const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000; // environment variable that Heroku will set

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

// tell the app that we will be using handlebars for our templating
app.set('view engine', 'hbs');

// we can register hbs helpers to call from the hbs template
hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
});

app.use((req, res, next) => {
	var now = new Date().toString();
	var log = `${now}: ${req.method} ${req.url}`;

	console.log(log);
	fs.appendFile('server.log', log + '\n', (err) => {
		if(err){
			console.log('Unable to append to server.log.');
		}
	});
	next();
});

// app.use((req, res, next) => {
// 	res.render('maintenance.hbs');
// });

// Make static web server to avoid creating routes for every static file
app.use(express.static(__dirname + '/public')); // use method helps use Express Middleware like express.static()


app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Home Page',
		welcomeMessage: 'Welcome to my website'
	});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About Page'
	});
});

app.get('/bad', (req, res) => {
	res.send({
		errorMessage: 'Error handling request'
	}); // passing a JS Object to the send automatically sends JSON data to the browser
});

app.get('/projects', (req, res) =>{
	res.render('projects.hbs', {
		pageTitle: 'Projects'
	});
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}.`);
});