const { sequelize } = require('../db/models');
const { UserRegisterDto, UserTokenDto } = require('../dtos/UserDto');
const ApplicationError = require('../errors/ApplicationError');
const { loggingError } = require('../utils/errorLogFunction');
const { userService, authService } = require('./service');

module.exports.registration = async (req, res, next) => {
	const t = await sequelize.transaction();
	try {
		const { body } = req;
		const { ...userRegisterData } = new UserRegisterDto(body);
		const newUser = await userService.userCreation(userRegisterData, t);
		const { ...userTokenData } = new UserTokenDto(newUser);
		const token = authService.generateToken(userTokenData);
		await userService.updateUser(
			{ accessToken: token }, { id: userTokenData.userId }, t);
		res.status(200).send({ token });
		t.commit();
	} catch (err) {
		t.rollback();
		loggingError(err);
		err.name === 'SequelizeUniqueConstraintError'
			? next(ApplicationError.NotUniqueEmail('This email were already exist', err))
			: next(err);
	}
};
module.exports.login = async (req, res, next) => {
	const t = await sequelize.transaction();
	try {
		const { email, password } = req.body;
		const foundUser = await userService.findUser({ email });
		await authService.passwordCompare(password, foundUser.password);
		const { ...userTokenData } = new UserTokenDto(foundUser);
		const token = authService.generateToken(userTokenData);
		await userService.updateUser(
			{ accessToken: token }, { id: userTokenData.userId }, t);
		res.status(200).send({ token });
		t.commit();
	} catch (err) {
		t.rollback();
		loggingError(err);
		next(err);
	}
};
