const { Contest, Sequelize } = require('../db/models');
const CONSTANTS = require('../constants');
const ApplicationError = require('../errors/ApplicationError');
const { loggingError } = require('../utils/errorLogFunction');

module.exports.onlyForCustomer = (req, res, next) => {
	const { tokenData: { role } } = req;
	role === CONSTANTS.CUSTOMER
		? next()
		: next(ApplicationError.RightsError('this page only for customers'));
};
module.exports.onlyForCreative = (req, res, next) => {
	const { tokenData: { role } } = req;
	role === CONSTANTS.CREATOR
		? next()
		: next(ApplicationError.RightsError('this page only for creative'));
};
module.exports.onlyForModerator = (req, res, next) => {
	const { tokenData: { role } } = req;
	role === CONSTANTS.MODERATOR
		? next()
		: next(ApplicationError.RightsError('this page only for moderator'));
};
module.exports.parseBody = (req, res, next) => {
	try {
		const { body } = req;
		const obj = JSON.parse(body.contests);
		body.contests = obj;
		body.contests.forEach(contest => {
			if (contest.haveFile) {
				const file = req.files.splice(0, 1);
				contest.fileName = file[0].filename;
				contest.originalFileName = file[0].originalname;
			}
		});
		next();
	} catch (err) {
		loggingError(err);
		next(err);
	}
};

module.exports.canGetContest = async (req, res, next) => {
	let result = null;
	try {
		const { tokenData: { role, userId }, params: { contestId } } = req;
		if (role === CONSTANTS.CUSTOMER) {
			result = await Contest.findOne({ where: { id: contestId, userId } });
		} else if (role === CONSTANTS.CREATOR) {
			result = await Contest.findOne({
				where: {
					id: contestId,
					status: {
						[Sequelize.Op.or]: [
							CONSTANTS.CONTEST_STATUS_ACTIVE,
							CONSTANTS.CONTEST_STATUS_FINISHED,
						],
					},
				},
			});
		} else if (role === CONSTANTS.MODERATOR) {
			result = await Contest.findOne({
				where: {
					id: contestId,
					status: CONSTANTS.CONTEST_STATUS_ACTIVE,
				},
			});
		}
		result ? next() : next(ApplicationError.RightsError());
	} catch (err) {
		loggingError(err);
		next(ApplicationError.ServerError(null, err));
	}
};

module.exports.canSendOffer = async (req, res, next) => {
	const { tokenData: { role }, body: { contestId } } = req;
	if (role === CONSTANTS.CUSTOMER) {
		return next(ApplicationError.RightsError());
	}
	try {
		const result = await Contest.findOne({
			where: { id: contestId },
			attributes: ['status'],
			raw: true,
		});
		result.status === CONSTANTS.CONTEST_STATUS_ACTIVE
			? next()
			: next(ApplicationError.RightsError());
	} catch (err) {
		loggingError(err);
		next(ApplicationError.ServerError(null, err));
	}
};

module.exports.onlyForCustomerWhoCreateContest = async (req, res, next) => {
	try {
		const { tokenData: { userId }, body: { contestId: id } } = req;
		const result = await Contest.findOne({
			where: {
				userId, id,
				status: CONSTANTS.CONTEST_STATUS_ACTIVE,
			},
		});
		if (!result) {
			return next(ApplicationError.RightsError());
		}
		next();
	} catch (err) {
		loggingError(err);
		next(ApplicationError.ServerError(null, err));
	}
};

module.exports.canUpdateContest = async (req, res, next) => {
	try {
		const { tokenData: { userId }, body: { contestId: id } } = req;
		const result = await Contest.findOne({
			where: {
				userId, id,
				status: { [Sequelize.Op.not]: CONSTANTS.CONTEST_STATUS_FINISHED },
			},
		});
		if (!result) {
			return next(ApplicationError.RightsError());
		}
		next();
	} catch (err) {
		loggingError(err);
		next(ApplicationError.ServerError(null, err));
	}
};

