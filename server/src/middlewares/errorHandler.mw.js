const { BaseError } = require('sequelize');
const { MulterError } = require('multer');

const ApplicationError = require('../errors/ApplicationError');

module.exports.applicationErrorHandler = (err, req, res, next) => {
	if (err instanceof ApplicationError) {
		return res.status(err.status).send({
			message: err.message,
			details: err.details,
		});
	}
	next(err);
};
module.exports.multerErrorHandler = (err, req, res, next) => {
	if (err instanceof MulterError) {
		return res.status(500).send({
			message: 'Server errors',
			details: `Multer error: ${err.message}`,
		});
	}
	next(err);
};
module.exports.sequelizeErrorHandler = (err, req, res, next) => {
	if (err instanceof BaseError) {
		return res.status(500).send({
			message: 'Server errors',
			details: `Sequelize error: ${err.message}`,
		});
	}
	next(err);
};
module.exports.errorHandler = (err, req, res, next) => {
	if (err.message ===
		'new row for relation "Banks" violates check constraint "Banks_balance_ck"' ||
		err.message ===
		'new row for relation "Users" violates check constraint "Users_balance_ck"') {
		err.message = 'Not Enough money';
		err.code = 406;
	}
	if (res.headerSent) return;
	return res.status(err?.code ?? 500).send({
		message: 'Internal server error END',
		details: err?.message ?? 'Unexpected error',
	});
};
