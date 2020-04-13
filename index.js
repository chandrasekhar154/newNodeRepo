const app = require('./app');
const { promisify } = require('util');

const startServer = async () => {
	const port = process.env.SERVER_PORT || 4040;
	try {
		await promisify(app.listen).bind(app)(port);
		console.log(`Listen on the port ${port}`);
	}
	catch (error) {
		console.log('Server started on port ' + port + ' with error ' + error);
	}
}
startServer();
