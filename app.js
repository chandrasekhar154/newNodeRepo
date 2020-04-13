const express = require('express');
const bodyParser = require('body-parser');

const session = require('express-session');
const uuId = require('node-uuid');
const cors = require('cors');

const versionId = 'V1';

const app = express();

app.use(session({
	secret: uuId.v1(),
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.raw({ limit: '100MB' }));
app.use(bodyParser.json({ limit: '100MB' }));
app.use(bodyParser.urlencoded({
	limit: '100MB',
	extended: true,
	parameterLimit: 100000
}));
app.use(cors());

const Data_Reports = require('./Data_Reports/Main.Router.js');

app.use('/api/' + versionId + '/Data_Reports', Data_Reports);

app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.json({
		message: err.message,
		title: 'error-title'
	});
});

module.exports = app;