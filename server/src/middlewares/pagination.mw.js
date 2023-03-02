const { loggingError } = require('../utils/errorLogFunction');
const { paginationSchem } = require('../validationSchemes/schems');

module.exports.pagination = async (req, res, next) => {
	const { limit, offset } = req.query;
	const defaultPagionation = {
		limit: 8,
		offset: 0,
	};
	const pagination = {
		limit: limit ?? 8,
		offset: offset || 0,
	};
	try {
		if (await paginationSchem.isValid(pagination)) {
			req.pagination = pagination;
		} else {
			req.pagination = defaultPagionation;
		}
		next();
	} catch (error) {
		loggingError(error);
		next(error);
	}
};
