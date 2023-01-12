const ApplicationError = require('../errors/ApplicationError');
const { registrationSchem, loginSchem, contestSchem } = require('../validationSchemes/schems');

module.exports.validateRegistrationData = async (req, res, next) => {
	const body = req.body;
	try {
		await registrationSchem.validate(body, {
			abortEarly: false,
		});
		next();
	} catch (err) {
		next(ApplicationError.BadRequestError('Invalid data for registration', err));
	}
};
module.exports.validateLogin = async (req, res, next) => {
	const body = req.body;
	try {
		await loginSchem.validate(body, {
			abortEarly: false,
		});
		next();
	} catch (err) {
		next(ApplicationError.BadRequestError('Invalid data for login', err));
	}
};
module.exports.validateContestCreation = async (req, res, next) => {
	const promiseArray = [];
	try {
		const { contests } = req.body;
		contests.forEach((contest) => {
			promiseArray.push(contestSchem.isValid(contest));
		});
		const results = await Promise.all(promiseArray);
		results.forEach((result) => {
			if (!result) {
				next(ApplicationError.BadRequestError('Invalid data for contest'));
			}
		});
		next();
	} catch (err) {
		next(ApplicationError.BadRequestError('Invalid data for contest', err));
	}
};
