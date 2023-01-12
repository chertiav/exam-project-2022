const express = require('express');
const cors = require('cors');
//====================================================
const router = require('./routers');
const { errorHandler } = require('./middlewares');
const { static_path } = require('./config/config');
require('./db/models/mongoModels');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/public/images', express.static(static_path));
app.use('/api', router);
app.use(
	errorHandler.applicationErrorHandler,
	errorHandler.multerErrorHandler,
	errorHandler.sequelizeErrorHandler,
	errorHandler.errorHandler,
);

module.exports.app = app;
