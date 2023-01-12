const { Offer, sequelize } = require('../../db/models');
const ApplicationError = require('../../errors/ApplicationError');
const CONSTANTS = require('../../constants');
const controller = require('../../socketInit');
const { updateContestStatus } = require('./contestService');
const { userService } = require('.');

module.exports.createOffer = async (data, t) => {
	const result = await Offer.create(data, { transaction: t });
	if (!result) {
		throw ApplicationError.ServerError('cannot create new Offer');
	} else {
		return result.dataValues;
	}
};

const updateOffer = async (data, predicate, t) => {
	const [updatedCount, [updatedOffer]] = await Offer.update(data,
		{ where: predicate, returning: true, transaction: t });
	if (!updatedCount) {
		throw ApplicationError.ServerError('cannot update offer!');
	} else {
		return updatedOffer.dataValues;
	}
};

const updateOfferStatus = async (data, predicate, t) => {
	const result = await Offer.update(data,
		{ where: predicate, returning: true, raw: true, transaction: t });
	if (result[0] < 1) {
		throw ApplicationError.ServerError('cannot update offer!');
	} else {
		return result[1];
	}
};

module.exports.rejectOffer = async (offerId, creatorId, contestId, t) => {
	const rejectedOffer = await updateOffer(
		{ status: CONSTANTS.OFFER_STATUS_REJECTED }, { id: offerId }, t);
	controller.getNotificationController().emitChangeOfferStatus(creatorId,
		'Someone of yours offers was rejected', contestId);
	return rejectedOffer;
};

module.exports.resolveOffer = async (
	contestId, creatorId, orderId, offerId, priority, t) => {
	const finishedContest = await updateContestStatus({
		status: sequelize.literal(`
			CASE
				WHEN "id"=${contestId} AND "orderId"='${orderId}'
					THEN '${CONSTANTS.CONTEST_STATUS_FINISHED}'
				WHEN	"orderId"='${orderId}'	AND "priority"=${priority + 1}
					THEN '${CONSTANTS.CONTEST_STATUS_ACTIVE}'
				ELSE '${CONSTANTS.CONTEST_STATUS_PENDING}'
			END
    `),
	}, { orderId }, t);
	await userService.updateUser(
		{ balance: sequelize.literal('balance +' + finishedContest.prize) },
		{ id: creatorId }, t);
	const updatedOffers = await updateOfferStatus({
		status: sequelize.literal(`
			CASE
				WHEN "id"=${offerId}
					THEN '${CONSTANTS.OFFER_STATUS_WON}'
				ELSE '${CONSTANTS.OFFER_STATUS_REJECTED}'
			END
    `),
	}, { contestId }, t);
	const arrayRoomsId = [];
	const resolveOfferData = [];
	updatedOffers.forEach(offer => {
		if (offer.status === CONSTANTS.OFFER_STATUS_REJECTED && creatorId !== offer.userId) {
			arrayRoomsId.push(offer.userId);
		}
		else if (offer.status === CONSTANTS.OFFER_STATUS_WON) {
			resolveOfferData.push(offer);
		}
	});
	controller.getNotificationController().emitChangeOfferStatus(arrayRoomsId,
		'Someone of yours offers was rejected', contestId);
	controller.getNotificationController().emitChangeOfferStatus(creatorId,
		'Someone of your offers WIN', contestId);
	return resolveOfferData[0];
};
