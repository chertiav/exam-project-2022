const { Message, Conversation, Catalog } = require('../../db/models');
const ApplicationError = require('../../errors/ApplicationError');

module.exports.messageCreation = async (data, t) => {
	try {
		const newMessage = await Message.create(data, { transaction: t });
		if (newMessage) {
			return newMessage.dataValues;
		}
	} catch (err) {
		throw ApplicationError.ServerError(`message not found: ${err.message}`);
	}
};

module.exports.updateConversation = async (data, predicate, t) => {
	const [updatedCount, [updatedContest]] = await Conversation.update(data,
		{ where: predicate, returning: true, transaction: t });
	if (!updatedCount) {
		throw ApplicationError.ServerError('cannot update Conversation');
	} else {
		return updatedContest.dataValues;
	}
};

module.exports.findChat = async (predicate) => {
	const findChat = await Conversation.findOne(predicate);
	if (!findChat) {
		throw ApplicationError.ServerError('chat hasn`t been found');
	} else {
		return findChat;
	}
};

module.exports.updateCatalog = async (data, predicate, t) => {
	const [countUpdate, [updateCatalog]] = await Catalog.update(data, {
		where: predicate,
		returning: true,
		raw: true,
		transaction: t,
	});
	if (!countUpdate) {
		throw ApplicationError.ServerError('Any catalog messages hasn`t been updeted');
	}
	updateCatalog._id = updateCatalog.id;
	delete updateCatalog.id;
	return updateCatalog;
};
