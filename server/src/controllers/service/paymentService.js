const { Bank } = require('../../db/models');
const ApplicationError = require('../../errors/ApplicationError');

module.exports.updateBankBalance = async (data, predicate, transaction) => {
	const [updatedCount, [updatedBank]] = await Bank.update(data,
		{ where: predicate, returning: true, transaction });
	if (updatedCount < 2) {
		throw ApplicationError.BankDeclineError('Bank decline transaction');
	}
};
