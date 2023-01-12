const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
//==============================================
const ApplicationError = require('../../errors/ApplicationError');
const CONSTANTS = require('../../constants');

module.exports.generateToken = (userTokenData) => {
	const token = jwt.sign(userTokenData, process.env.JWT_SECRET, {
		expiresIn: CONSTANTS.ACCESS_TOKEN_TIME,
	});
	return token;
};
module.exports.passwordCompare = async (pass1, pass2) => {
	const passwordCompare = await bcrypt.compare(pass1, pass2);
	if (!passwordCompare) {
		throw ApplicationError.UserNotFoundError('Wrong login or password');
	}
};
