const { User } = require('../../db/models');
const ApplicationError = require('../../errors/ApplicationError');

module.exports.userCreation = async (data, t) => {
	try {
		const newUser = await User.create(data, { transaction: t });
		if (newUser) {
			return newUser.dataValues;
		}
	} catch (err) {
		throw ApplicationError.ServerError('Server error while creating user, please change your email', err);
	}
};
module.exports.updateUser = async (data, predicate, t) => {
	try {
		const [updatedCount, [updatedUser]] = await User.update(data,
			{ where: predicate, returning: true, transaction: t },
		);
		if (updatedCount) {
			return updatedUser.dataValues;
		}
	} catch (err) {
		if (err.message.includes('Users_balance_ck')) {
			throw ApplicationError.NotEnoughMoney('Not enough money', err);
		} else {
			throw ApplicationError.ServerError('Cannot update user', err);
		}
	}
};
module.exports.findUser = async (predicate) => {
	const result = await User.findOne({ where: predicate, raw: true });
	if (!result) {
		throw ApplicationError.UserNotFoundError('Wrong login or password');
	}
	return result;
};
