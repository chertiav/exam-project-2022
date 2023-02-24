//=================================================================
const controller = require('../socketInit');
const { User } = require('../db/models');
const { models: { Conversations, Messages, Catalogs } } = require('../db/models/mongoModels');
const { userService } = require('./service');
const { UserChatDto, UserInterlocutorChatDto } = require('../dtos/UserDto');
const ApplicationError = require('../errors/ApplicationError');
const { loggingError } = require('../utils/errorLogFunction');

module.exports.addMessage = async (req, res, next) => {
	try {
		const { tokenData, body } = req;
		const participants = [tokenData.userId, body.recipient];
		participants.sort((participant1, participant2) => participant1 - participant2);
		const newConversation = await Conversations.findOneAndUpdate(
			{ participants },
			{ participants, blackList: [false, false], favoriteList: [false, false] },
			{
				upsert: true,
				new: true,
				setDefaultsOnInsert: true,
				useFindAndModify: false,
			});
		const messageBody = {
			sender: tokenData.userId,
			body: body.messageBody,
			conversation: newConversation._id,
		};
		const message = await new Messages(messageBody).save();
		if (!message) {
			throw ApplicationError.ServerError('message not found');
		}
		message._doc.participants = participants;
		const interlocutorId = participants.filter((participant) => participant !== tokenData.userId)[0];
		const preview = {
			_id: newConversation._id,
			sender: tokenData.userId,
			text: body.messageBody,
			createAt: message.createdAt,
			participants,
			blackList: newConversation.blackList,
			favoriteList: newConversation.favoriteList,
		};
		controller.getChatController().emitNewMessage(interlocutorId, {
			message,
			preview: {
				_id: newConversation._id,
				sender: tokenData.userId,
				text: body.messageBody,
				createAt: message.createdAt,
				participants,
				blackList: newConversation.blackList,
				favoriteList: newConversation.favoriteList,
				interlocutor: { ...new UserInterlocutorChatDto(tokenData) },
			},
		});
		res.status(200).send({
			message,
			preview: Object.assign(preview, { interlocutor: body.interlocutor }),
		});
	} catch (err) {
		loggingError(err);
		next(err);
	}
};

module.exports.getChat = async (req, res, next) => {
	try {
		const { tokenData: { userId }, query } = req;
		const interlocutorId = parseInt(query.interlocutorId);
		const participants = [userId, interlocutorId];
		participants.sort((participant1, participant2) => participant1 - participant2);
		const messages = await Messages.aggregate([
			{
				$lookup: {
					from: 'conversations',
					localField: 'conversation',
					foreignField: '_id',
					as: 'conversationData',
				},
			},
			{ $match: { 'conversationData.participants': participants } },
			{ $sort: { createdAt: 1 } },
			{
				$project: {
					'_id': 1,
					'sender': 1,
					'body': 1,
					'conversation': 1,
					'createdAt': 1,
					'updatedAt': 1,
				},
			},
		]);
		if (!messages) {
			throw ApplicationError.ServerError('Any messages hasn`t been found');
		}
		const interlocutor = await userService.findUser({ id: interlocutorId });
		res.status(200).send({
			messages,
			interlocutor: { ...new UserChatDto(interlocutor) },
		});
	} catch (err) {
		loggingError(err);
		next(err);
	}
};

module.exports.getPreview = async (req, res, next) => {
	try {
		const { tokenData: { userId } } = req;
		const conversations = await Messages.aggregate([
			{
				$lookup: {
					from: 'conversations',
					localField: 'conversation',
					foreignField: '_id',
					as: 'conversationData',
				},
			},
			{ $unwind: '$conversationData' },
			{ $match: { 'conversationData.participants': userId } },
			{ $sort: { createdAt: -1 } },
			{
				$group: {
					_id: '$conversationData._id',
					sender: { $first: '$sender' },
					text: { $first: '$body' },
					createAt: { $first: '$createdAt' },
					participants: { $first: '$conversationData.participants' },
					blackList: { $first: '$conversationData.blackList' },
					favoriteList: { $first: '$conversationData.favoriteList' },
				},
			},
		]);
		if (!conversations) {
			throw ApplicationError.ServerError('Any messages hasn`t been found');
		}
		const interlocutors = [];
		conversations.forEach(conversation => {
			interlocutors.push(conversation.participants.find((participant) =>
				participant !== userId));
		});
		const senders = await User.findAll({
			where: { id: interlocutors },
			attributes: ['id', 'firstName', 'lastName', 'displayName', 'avatar'],
		});
		conversations.forEach((conversation) => {
			senders.forEach(sender => {
				if (conversation.participants.includes(sender.dataValues.id)) {
					conversation.interlocutor = {
						...new UserChatDto(sender.dataValues),
					};
				}
			});
		});
		res.status(200).send(conversations);
	} catch (err) {
		loggingError(err);
		next(err);
	}
};

module.exports.blackList = async (req, res, next) => {
	try {
		const { tokenData: { userId }, body: { participants, blackListFlag } } = req;
		const predicate = 'blackList.' + participants.indexOf(userId);
		const chat = await Conversations.findOneAndUpdate(
			{ participants }, { $set: { [predicate]: blackListFlag } }, { new: true });
		if (!chat) {
			throw ApplicationError.ServerError('Any chat messages hasn`t been updeted');
		}
		const interlocutorId = participants.filter((participant) => participant !== userId)[0];
		controller.getChatController().emitChangeBlockStatus(interlocutorId, chat);
		res.status(200).send(chat);
	} catch (err) {
		loggingError(err);
		next(err);
	}
};

module.exports.favoriteChat = async (req, res, next) => {
	try {
		const { tokenData: { userId }, body: { participants, favoriteFlag } } = req;
		const predicate = 'favoriteList.' + participants.indexOf(userId);
		const chat = await Conversations.findOneAndUpdate(
			{ participants }, { $set: { [predicate]: favoriteFlag } }, { new: true });
		if (!chat) {
			throw ApplicationError.ServerError('Any chat messages hasn`t been updeted');
		}
		res.status(200).send(chat);
	} catch (err) {
		loggingError(err);
		next(err);
	}
};

module.exports.createCatalog = async (req, res, next) => {
	try {
		const { tokenData: { userId }, body: { chatId, catalogName } } = req;
		const catalogBody = { userId, catalogName, chats: [chatId] };
		const catalog = await new Catalogs(catalogBody).save();
		if (!catalog) {
			throw ApplicationError.ServerError('Any catalog messages hasn`t been found');
		}
		res.status(200).send(catalog);
	} catch (err) {
		loggingError(err);
		next(err);
	}
};

module.exports.updateNameCatalog = async (req, res, next) => {
	try {
		const { tokenData: { userId }, body: { catalogId: _id, catalogName } } = req;
		const catalog = await Catalogs.findOneAndUpdate({ _id, userId },
			{ catalogName }, { new: true });
		if (!catalog) {
			throw ApplicationError.ServerError('Any catalog messages hasn`t been updeted');
		}
		res.status(200).send(catalog);
	} catch (err) {
		loggingError(err);
		next(err);
	}
};

module.exports.addNewChatToCatalog = async (req, res, next) => {
	try {
		const { tokenData: { userId }, body: { catalogId: _id, chatId } } = req;
		const catalog = await Catalogs.findOneAndUpdate({ _id, userId },
			{ $addToSet: { chats: chatId } }, { new: true });
		if (!catalog) {
			throw ApplicationError.ServerError('Any catalog messages hasn`t been updeted');
		}
		res.send(catalog);
	} catch (err) {
		loggingError(err);
		next(err);
	}
};

module.exports.removeChatFromCatalog = async (req, res, next) => {
	try {
		const { tokenData: { userId }, body: { catalogId: _id, chatId } } = req;
		const catalog = await Catalogs.findOneAndUpdate({ _id, userId },
			{ $pull: { chats: chatId } }, { new: true });
		if (!catalog) {
			throw ApplicationError.ServerError('Any catalog messages hasn`t been updeted');
		}
		res.status(200).send(catalog);
	} catch (err) {
		loggingError(err);
		next(err);
	}
};

module.exports.deleteCatalog = async (req, res, next) => {
	try {
		const { params: { catalogId } } = req;
		const deleteCatalog = await Catalogs.findByIdAndDelete(catalogId);
		if (!deleteCatalog) {
			throw ApplicationError.ServerError('Any catalog messages hasn`t been delete');
		}
		res.sendStatus(res.statusCode);
	} catch (err) {
		loggingError(err);
		next(err);
	}
};

module.exports.getCatalogs = async (req, res, next) => {
	try {
		const { tokenData: { userId } } = req;
		const catalogs = await Catalogs.aggregate([
			{ $match: { userId } },
			{ $project: { _id: 1, catalogName: 1, chats: 1 } },
		]);
		if (!catalogs) {
			throw ApplicationError.ServerError('Any catalogs messages hasn`t been found');
		}
		res.status(200).send(catalogs);
	} catch (err) {
		loggingError(err);
		next(err);
	}
};
