const CONSTANTS = require('../constants');
const { offerService, userService, ratingService } = require('./service');
const controller = require('../socketInit');
const { sequelize, Sequelize, Offer, Rating, User } = require('../db/models');
const ApplicationError = require('../errors/ApplicationError');
const { UserTokenDto } = require('../dtos/UserDto');
const { createCountHaveMoreOffers } = require('../utils/functions');
const mailService = require('./mailService/mailService');

module.exports.addNewOffer = async (req, res, next) => {

	const t = await sequelize.transaction();
	const { body, tokenData: { userId }, file } = req;
	const obj = Object.assign({}, { userId, contestId: body.contestId });
	if (body.contestType === CONSTANTS.LOGO_CONTEST && file) {
		obj.fileName = file.filename;
		obj.originalFileName = file.originalname;
	} else {
		obj.text = body.offerData;
	}
	try {
		const { contestId, userId, ...result } = await offerService.createOffer(obj, t);
		const userData = await userService.findUser({ id: userId });
		const user = { ...new UserTokenDto(userData), id: userId };
		res.status(200).send({ ...result, User: user });
		controller.getNotificationController().emitEntryCreated(body.customerId);
		t.commit();
	} catch (err) {
		t.rollback();
		next(ApplicationError.ServerError(null, err));
	}
};

module.exports.deleteOffer = async (req, res, next) => {
	const t = await sequelize.transaction();

	try {
		const { id, email } = req.query;
		const deletedOffer = await Offer.destroy({
			where: { id },
			transaction: t,
		});
		if (deletedOffer) {
			await mailService.sendMail(email, 'Offer removed by moderator');
			res.status(200).send('Ok');
		}
		t.commit();
	} catch (err) {
		t.rollback();
		next(ApplicationError.ServerError('offer hasn"t been delete', err));
	}
};

module.exports.setOfferStatus = async (req, res, next) => {
	const t = await sequelize.transaction();
	try {
		const {
			body: { command, offerId, creatorId, contestId, orderId, priority, email },
		} = req;
		let result;
		if (command === 'reject') {
			result = await offerService.rejectOffer(offerId, creatorId, contestId, t);
		} else if (command === 'resolve') {
			result = await offerService.resolveOffer(contestId, creatorId, orderId, offerId, priority, t);
		}
		else if (command === 'active') {
			result = await offerService.activeOffer(offerId, email, t);
		}
		res.status(200).send(result);
		t.commit();
	} catch (err) {
		console.log(err);
		t.rollback();
		next(err);
	}
};

module.exports.getAllOffersByContestId = async (req, res, next) => {
	try {
		const {
			query: { contestId },
			tokenData: { role, userId },
			pagination: { limit, offset },
		} = req;
		const offers = await Offer.findAll({
			where:
				role === CONSTANTS.MODERATOR
					? { contestId, status: CONSTANTS.OFFER_STATUS_PENDING }
					: role === CONSTANTS.CREATOR
						? { userId, contestId }
						: { contestId, status: CONSTANTS.OFFER_STATUS_ACTIVE },
			attributes: { exclude: ['userId', 'contestId'] },
			order: [['status', 'desc'], ['id', 'asc']],
			limit, offset,
			raw: true,
			nest: true,
			include:
				role === CONSTANTS.MODERATOR
					? [{
						model: User,
						required: true,
						attributes: { exclude: ['id', 'firstName', 'lastName', 'displayName', 'password', 'avatar', 'role', 'balance', 'accessToken', 'rating'] },
					}]
					: [{
						model: User,
						required: true,
						attributes: { exclude: ['password', 'role', 'balance', 'accessToken'] },
					}, {
						model: Rating,
						required: false,
						where: { userId },
						attributes: { exclude: ['userId', 'offerId'] },
					}],
		});
		offers.forEach(offer => {
			if (offer.Rating) {
				offer.mark = offer.Rating.mark;
			}
			delete offer.Rating;
		});
		const haveMore = createCountHaveMoreOffers(offers);
		res.status(200).send({ offers, haveMore });
	} catch (err) {
		next(ApplicationError.ServerError(null, err));
	}
};
module.exports.changeMark = async (req, res, next) => {
	const t = await sequelize.transaction({
		isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.READ_UNCOMMITTED,
	});
	try {
		let sum = 0;
		const { body: { isFirst, offerId, mark, creatorId }, tokenData: { userId } } = req;
		const queryRating = ratingService.getQueryRating(offerId, userId, mark, isFirst, t);
		await queryRating();
		const offersArray = await Rating.findAll({
			include: [{ model: Offer, required: true, where: { userId: creatorId } }],
			transaction: t,
		});
		offersArray.forEach(offer => sum += offer.dataValues.mark);
		const avg = sum / offersArray.length;
		await userService.updateUser({ rating: avg }, { id: creatorId }, t);
		res.send({ userId: creatorId, rating: avg });
		controller.getNotificationController().emitChangeMark(creatorId);
		t.commit();
	} catch (err) {
		t.rollback();
		next(err);
	}
};
