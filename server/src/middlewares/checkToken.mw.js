const jwt = require('jsonwebtoken');
require('dotenv').config();
//==================================s
const ApplicationError = require('../errors/ApplicationError');
const UserDto = require('../dtos/UserDto');
const { userService } = require('../controllers/service');


module.exports.checkAuth = async (req, res, next) => {
	const accessToken = req.headers.authorization;
	if (!accessToken) {
		return next(ApplicationError.TokenError('Need a token'));
	}
	try {
		const tokenData = jwt.verify(accessToken, process.env.JWT_SECRET);
		const foundUser = await userService.findUser({ id: tokenData.userId });
		const { ...userData } = new UserDto.UserAppDto(foundUser);
		res.status(200).send(userData);
	} catch (err) {
		next(ApplicationError.TokenError('User is not authorized', err));
	}
};
module.exports.checkToken = async (req, res, next) => {
	const accessToken = req.headers.authorization;
	if (!accessToken) {
		return next(ApplicationError.TokenError('Need a token'));
	}
	try {
		req.tokenData = jwt.verify(accessToken, process.env.JWT_SECRET);
		next();
	} catch (err) {
		next(ApplicationError.TokenError('User is not authorized', err));
	}
};
