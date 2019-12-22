'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');


// Unhandled Rejections and Exceptions process wide
process
	.on('unhandledRejection', (reason, promise) => {
		console.log('Unhandled Rejection at Promise:', reason, promise);
	})
	.on('uncaughtException', (error) => {
		console.log('Uncaught Exception thrown:', error);
		process.exit(1);
	});

// Initializing app
const app = express();

// Setting body parser middle ware
app.use(bodyParser.raw({ type: 'application/jwt' }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({
	limit: "50mb", extended: true, parameterLimit: 50000
}));

app.use(cors());



// Defining routesProperty Configuration is not defined in type NodeJS.Global
require('./routes')(app);


const server = http.createServer(app);

// Starting the server
server.listen(3000, () => {
	console.log('Node server listening on port ' + 3000);
});