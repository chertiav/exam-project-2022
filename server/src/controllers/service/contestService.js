const { Contest } = require('../../db/models');
const ApplicationError = require('../../errors/ApplicationError');

module.exports.updateContest = async (data, predicate, t) => {
	const [updatedCount, [updatedContest]] = await Contest.update(data,
		{ where: predicate, returning: true, transaction: t });
	if (!updatedCount) {
		throw ApplicationError.ServerError('cannot update Contest');
	} else {
		return updatedContest.dataValues;
	}
};

module.exports.updateContestStatus = async (data, predicate, t) => {
	const [updatedCount, [updatedContest]] = await Contest.update(data,
		{ where: predicate, returning: true, transaction: t });
	if (!updatedCount) {
		throw ApplicationError.ServerError('cannot update Contest');
	} else {

		return updatedContest.dataValues;
	}
};
