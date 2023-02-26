const fs = require('fs');
const path = require('path');
//=================================================
const { static_path } = require('../config/config');
const { Sequelize } = require('../db/models');
const CONSTANTS = require('../constants');

function getPredicateTypes(index) {
	return { [Sequelize.Op.or]: [CONSTANTS.CONTEST_TYPE[index].split(',')] };
}
module.exports.parseBool = (params) => {
	return !(
		params === 'false' ||
		params === 'null' ||
		params === '0' ||
		params === '' ||
		params === 'undefined' ||
		params === null ||
		params === undefined
	);
};
module.exports.createWhereAllContests = (
	typeIndex, contestId, industry, awardSort, role) => {
	const object = {
		where: {},
		order: [],
	};
	const statusWhere = role === CONSTANTS.MODERATOR
		? [CONSTANTS.CONTEST_STATUS_ACTIVE]
		: [CONSTANTS.CONTEST_STATUS_FINISHED, CONSTANTS.CONTEST_STATUS_ACTIVE];
	if (this.parseBool(typeIndex)) {
		Object.assign(object.where, {
			contestType: getPredicateTypes(typeIndex),
		});
	}
	if (this.parseBool(contestId) && !isNaN(parseInt(contestId))) {
		Object.assign(object.where, { id: contestId });
	}
	if (this.parseBool(industry)) {
		Object.assign(object.where, { industry });
	}
	if (this.parseBool(awardSort), awardSort) {
		object.order.push(['prize', awardSort]);
	}
	Object.assign(object.where, {
		status: { [Sequelize.Op.or]: statusWhere },
	});
	object.order.push(['id', 'desc']);
	return object;
};

module.exports.createCountHaveMore = (allContests) => {
	allContests.forEach(contest => contest.dataValues.count = contest.dataValues.Offers.length);
	let haveMore = true;
	if (allContests.length === 0) {
		haveMore = false;
	}
	return { contests: allContests, haveMore };
};

module.exports.createCountHaveMoreOffers = (Offers) => {
	let haveMore = true;
	if (Offers.length === 0) {
		haveMore = false;
	}
	return haveMore;
};

module.exports.deleteFile = (file) => {
	const filePath = path.join(static_path, file);
	if (fs.existsSync(filePath)) {
		fs.unlinkSync(filePath);
	}
};
