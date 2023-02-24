const bcrypt = require('bcrypt');
//==============================================
const CONSTANTS = require('../constants');
const ApplicationError = require('../errors/ApplicationError');
const { loggingError } = require('../utils/errorLogFunction');

module.exports.hashPass = async (req, res, next) => {
	try {
		const password = req.body.password;
		req.body.hashPass = await bcrypt.hash(password, CONSTANTS.SALT_ROUNDS);
		next();
	} catch (err) {
		loggingError(err);
		next(ApplicationError.ServerError('Server Error on hash password', err));
	}
};
