const { Select, Sequelize, Contest, Offer, User, sequelize } = require('../db/models');
const ApplicationError = require('../errors/ApplicationError');
const CONSTANTS = require('../constants');
const { createCountHaveMore, createWhereAllContests, parseBool, deleteFile } = require('../utils/functions');
const { contestService } = require('./service');
const { loggingError } = require('../utils/errorLogFunction');

module.exports.dataForContest = async (req, res, next) => {
	const response = {};
	try {
		const { query: { characteristic1, characteristic2 } } = req;
		const types = [characteristic1, characteristic2, 'industry'].filter(Boolean);
		const characteristics = await Select.findAll({
			where: { type: { [Sequelize.Op.or]: types } },
		});
		if (!characteristics) {
			return next(ApplicationError.ServerError('cannot get contest preferences'));
		}
		characteristics.forEach(characteristic => {
			if (!response[characteristic.type]) {
				response[characteristic.type] = [];
			}
			response[characteristic.type].push(characteristic.describe);
		});
		res.status(200).send(response);
	} catch (err) {
		loggingError(err);
		next(ApplicationError.ServerError('cannot get contest preferences', err));
	}
};

module.exports.getCustomersContests = async (req, res, next) => {
	try {
		const {
			tokenData: { userId },
			query: { status },
			pagination: { limit, offset },
		} = req;
		const allCustomerContests = await Contest.findAll({
			where: { status, userId }, limit, offset,
			order: [['id', 'DESC']],
			include: [{ model: Offer, required: false, attributes: ['id'] }],
		});
		const { contests, haveMore } = createCountHaveMore(allCustomerContests);
		res.status(200).send({ contests, haveMore });
	} catch (err) {
		loggingError(err);
		next(ApplicationError.ServerError(null, err));
	}
};

module.exports.getContests = async (req, res, next) => {
	try {
		const {
			query: { typeIndex, contestId, industry, awardSort, ownEntries },
			pagination: { limit, offset },
			tokenData: { userId },
		} = req;
		const predicates = createWhereAllContests(typeIndex, contestId, industry, awardSort);
		const allContests = await Contest.findAll({
			where: predicates.where,
			order: predicates.order,
			limit, offset,
			include: [
				{
					model: Offer,
					required: parseBool(ownEntries),
					where: parseBool(ownEntries) ? { userId } : {},
					attributes: ['id'],
				},
			],
		});
		const { contests, haveMore } = createCountHaveMore(allContests);
		res.status(200).send({ contests, haveMore });
	} catch (err) {
		loggingError(err);
		next(ApplicationError.ServerError(null, err));
	}
};

module.exports.getContestById = async (req, res, next) => {
	try {
		const { params: { contestId } } = req;
		const contestData = await Contest.findByPk(contestId, {
			raw: true,
			nest: true,
			include: [{
				model: User,
				required: true,
				attributes: {
					exclude: ['password', 'role', 'balance', 'accessToken'],
				},
			}],
		});
		res.status(200).send(contestData);
	} catch (err) {
		loggingError(err);
		next(ApplicationError.ServerError(null, err));
	}
};

module.exports.getCountOffersByContest = async (req, res, next) => {
	try {
		const {
			params: { contestId }, tokenData: { role, userId } } = req;
		const AllCountOffers = await Offer.count({
			where: role === CONSTANTS.CREATOR
				? { userId, contestId }
				: { contestId },
		});
		res.status(200).send({ AllCountOffers });
	} catch (err) {
		loggingError(err);
		next(ApplicationError.ServerError(null, err));
	}
};

module.exports.updateContest = async (req, res, next) => {
	const { body, file, tokenData: { userId } } = req;
	const t = await sequelize.transaction();
	if (file) {
		body.fileName = file.filename;
		body.originalFileName = file.originalname;
		body.deleteFile && deleteFile(body.deleteFile);
	}
	if (body.deleteFile && !file) {
		body.originalFileName = '';
		body.fileName = '';
		deleteFile(body.deleteFile);
	}
	const id = body.contestId;
	delete body.contestId;
	try {
		const updatedContest = await contestService.updateContest(body, { id, userId }, t);
		res.status(200).send(updatedContest);
		t.commit();
	} catch (err) {
		t.rollback();
		loggingError(err);
		next(ApplicationError.ServerError(null, err));
	}
};
