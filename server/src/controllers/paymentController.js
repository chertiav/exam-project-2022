const moment = require('moment');
const { v4: uuid } = require('uuid');
//==========================================================
const { userService, paymentService } = require('./service');
const { sequelize, Sequelize, Contest } = require('../db/models');
const CONSTANTS = require('../constants');


module.exports.payment = async (req, res, next) => {
	const t = await sequelize.transaction();
	try {
		const orderId = uuid();
		const { body: { number, cvc, expiry, price, contests }, tokenData: { userId } } = req;
		await paymentService.updateBankBalance({
			balance: sequelize.literal(`
				CASE
					WHEN "cardNumber"='${number.replace(/ /g, '')}'
						AND "cvc"='${cvc}' AND "expiry"='${expiry}'
						THEN "balance"-${price}
					WHEN "cardNumber"='${CONSTANTS.SQUADHELP_BANK_NUMBER}'
						AND "cvc"='${CONSTANTS.SQUADHELP_BANK_CVC}'
						AND "expiry"='${CONSTANTS.SQUADHELP_BANK_EXPIRY}'
						THEN "balance"+${price}
					END
			`),
		}, {
			cardNumber: {
				[Sequelize.Op.in]: [CONSTANTS.SQUADHELP_BANK_NUMBER, number.replace(/ /g, '')],
			},
		}, t);
		contests.forEach((contest, index) => {
			const prize = index === contests.length - 1
				? Math.ceil(price / contests.length)
				: Math.floor(price / contests.length);
			contest = Object.assign(contest, {
				status: index === 0 ? 'active' : 'pending',
				userId,
				priority: index + 1,
				orderId,
				createdAt: moment().format('YYYY-MM-DD HH:mm'),
				prize,
			});
		});
		await Contest.bulkCreate(contests, t);
		t.commit();
		res.sendStatus(200);
	} catch (err) {
		t.rollback();
		next(err);
	}
};
module.exports.cashout = async (req, res, next) => {
	const t = await sequelize.transaction();
	try {
		const { body: { number, cvc, expiry, sum }, tokenData: { userId } } = req;
		const updatedUser = await userService.updateUser(
			{ balance: sequelize.literal('balance -' + sum) }, { id: userId }, t);
		await paymentService.updateBankBalance({
			balance: sequelize.literal(`
				CASE
					WHEN "cardNumber"='${number.replace(/ /g, '')}'
						AND "expiry"='${expiry}'
						AND "cvc"='${cvc}'
					THEN "balance"+${sum}
					WHEN "cardNumber"='${CONSTANTS.SQUADHELP_BANK_NUMBER}'
						AND "expiry"='${CONSTANTS.SQUADHELP_BANK_EXPIRY}'
						AND "cvc"='${CONSTANTS.SQUADHELP_BANK_CVC}'
					THEN "balance"-${sum}
				END
			`),
		}, {
			cardNumber: {
				[Sequelize.Op.in]: [CONSTANTS.SQUADHELP_BANK_NUMBER, number.replace(/ /g, '')],
			},
		}, t);
		t.commit();
		res.status(200).send({ balance: updatedUser.balance });
	} catch (err) {
		t.rollback();
		next(err);
	}
};
