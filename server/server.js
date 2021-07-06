const express = require('express');
const corsMiddleware = require('./Middleware/index');
const xXssProtection = require('x-xss-protection');
const helmet = require('helmet');
const logging = require('./logging');

const NAME_SPACE = 'Server';
const server = express();
server.disable('x-powered-by');
server.use(helmet());
server.options('*', corsMiddleware);
server.use(corsMiddleware);
server.use(xXssProtection());
server.use(express.json());

// Routes import
const placesRoute = require('./routes/Routes-v1/places');
const bookingRoute = require('./routes/Routes-v1/booking');

// Loging the request

server.use((req, res, next) => {
	logging.info(NAME_SPACE, `METHOD - [${req.method}], URL - [${req.url}, IP - [${req.socket.remoteAddress}]]`);
	res.on('finish', () => {
		logging.info(NAME_SPACE, `METHOD - [${req.method}], URL - [${req.url}, IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]]`);
	});
	next();
});

server.use('/api/v1/venues', placesRoute);
server.use('/api/v1/booking', bookingRoute);

//Error handler
server.use((req, res) => {
	const error = new Error('Not Found');
	return res.status(404).json({
		message: error.message,
	});
});

module.exports = server;
