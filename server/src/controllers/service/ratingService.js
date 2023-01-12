const { Rating } = require('../../db/models');
const ApplicationError = require('../../errors/ApplicationError');

const createRating = async (data, t) => {
	const result = await Rating.create(data, { transaction: t });
	if (!result) {
		throw ApplicationError.ServerError('cannot mark offer');
	}
};

const updateRating = async (data, predicate, t) => {
	const [updatedCount] = await Rating.update(data,
		{ where: predicate, returning: true, transaction: t });
	if (updatedCount !== 1) {
		throw ApplicationError.ServerError('cannot update mark on this offer');
	}
};

module.exports.getQueryRating = (offerId, userId, mark, isFirst, t) => {
	const getCreateQuery = () => createRating({ offerId, mark, userId }, t);
	const getUpdateQuery = () => updateRating({ mark }, { offerId, userId }, t);
	return isFirst ? getCreateQuery : getUpdateQuery;
};
