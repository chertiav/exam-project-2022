//=================================================================
const controller = require('../socketInit');
const { User, Conversation, Message, Catalog, sequelize, Sequelize } = require('../db/models');
const { userService, chatService } = require('./service');
const { UserChatDto, UserInterlocutorChatDto } = require('../dtos/UserDto');
const ApplicationError = require('../errors/ApplicationError');


module.exports.addMessage = async (req, res, next) => {
	const { tokenData, body } = req;
	const t = await sequelize.transaction();
	try {
		const participants = [tokenData.userId, body.recipient];
		participants.sort((participant1, participant2) => participant1 - participant2);
		const [newConversation, isNewConversation] = await Conversation.findOrCreate({
			where: { participants },
			raw: true,
			defaults: {
				participants,
				blackList: [false, false],
				favoriteList: [false, false],
			},
		});
		const messageBody = {
			sender: tokenData.userId,
			body: body.messageBody,
			conversation: newConversation.id,
		};
		const message = await chatService.messageCreation(messageBody, t);
		message.participants = participants;
		const interlocutorId = participants.filter((participant) => participant !== tokenData.userId)[0];
		const preview = {
			_id: newConversation.id,
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
				_id: newConversation.id,
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
		t.commit();
	} catch (err) {
		t.rollback();
		next(ApplicationError.ServerError(null, err));
	}
};

module.exports.getChat = async (req, res, next) => {
	try {
		const { tokenData: { userId }, query } = req;
		const interlocutorId = parseInt(query.interlocutorId);
		const participants = [userId, interlocutorId];
		participants.sort((participant1, participant2) => participant1 - participant2);
		const messages = await Message.findAll({
			raw: true,
			nest: true,
			order: [['createdAt', 'ASC']],
			include: {
				model: Conversation,
				required: true,
				where: { participants },
				attributes: [],
			},
			attributes: [['id', '_id'], 'sender', 'body', 'conversation', 'createdAt'],
		});
		if (!messages) {
			throw ApplicationError.ServerError('Any messages hasn`t been found');
		}
		const interlocutor = await userService.findUser({ id: interlocutorId });
		res.status(200).send({
			messages,
			interlocutor: { ...new UserChatDto(interlocutor) },
		});
	} catch (err) {
		next(err);
	}
};

module.exports.getPreview = async (req, res, next) => {
	try {
		const { tokenData: { userId } } = req;
		const conversations = await Message.findAll({
			include: {
				model: Conversation,
				required: true,
				where: {
					participants: { [Sequelize.Op.contains]: [userId] },
				},
				attributes: [],
			},
			order: [['createdAt', 'DESC']],
			where: {
				id: {
					[Sequelize.Op.in]: [Sequelize.literal(`
						SELECT id FROM (
							SELECT id, conversation, "createdAt",
								MAX("createdAt") over (partition by conversation) as "maxCreatedAt"
							FROM "Messages") as max_created_at
						WHERE "createdAt" = "maxCreatedAt"
					`)],
				},
			},
			attributes: [
				[Sequelize.col('Conversation.id'), '_id'],
				['sender', 'sender'],
				['body', 'text'],
				['createdAt', 'createAt'],
				[Sequelize.col('Conversation.participants'), 'participants'],
				[Sequelize.col('Conversation.blackList'), 'blackList'],
				[Sequelize.col('Conversation.favoriteList'), 'favoriteList'],
			],
			raw: true,
		});
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
		next(err);
	}
};

module.exports.blackList = async (req, res, next) => {
	const t = await sequelize.transaction();
	try {
		const { tokenData: { userId }, body: { participants, blackListFlag } } = req;
		const blackList = await chatService.findChat({
			where: { participants }, attributes: ['blackList'], raw: true,
		});
		blackList.blackList[participants.indexOf(userId)] = blackListFlag;
		const chat = await chatService.updateConversation(blackList,
			{ participants }, t);
		if (!chat) {
			throw ApplicationError.ServerError('Any chat messages hasn`t been updeted');
		}
		const interlocutorId = participants.filter((participant) => participant !== userId)[0];
		controller.getChatController().emitChangeBlockStatus(interlocutorId, chat);
		res.status(200).send(chat);
		t.commit();
	} catch (err) {
		t.rollback();
		next(err);
	}
};

module.exports.favoriteChat = async (req, res, next) => {
	const t = await sequelize.transaction();
	try {
		const { tokenData: { userId }, body: { participants, favoriteFlag } } = req;
		const favoriteList = await chatService.findChat({
			where: { participants }, attributes: ['favoriteList'], raw: true,
		});
		favoriteList.favoriteList[participants.indexOf(userId)] = favoriteFlag;
		const chat = await chatService.updateConversation(favoriteList,
			{ participants }, t);
		if (!chat) {
			throw ApplicationError.ServerError('Any chat messages hasn`t been updeted');
		}
		res.status(200).send(chat);
		t.commit();
	} catch (err) {
		t.rollback();
		next(err);
	}
};

module.exports.getCatalogs = async (req, res, next) => {
	try {
		const { tokenData: { userId } } = req;
		const catalogs = await Catalog.findAll({
			where: { userId },
			attributes: [['id', '_id'], 'catalogName', 'chats'],
			raw: true,
		});
		if (!catalogs) {
			throw ApplicationError.ServerError('Any catalogs messages hasn`t been found');
		}
		res.status(200).send(catalogs);
	} catch (err) {
		next(err);
	}
};

module.exports.createCatalog = async (req, res, next) => {
	const t = await sequelize.transaction();
	try {
		const { tokenData: { userId }, body: { chatId, catalogName } } = req;
		const catalogBody = { userId, catalogName, chats: [chatId] };
		const catalog = await Catalog.create(catalogBody, { transaction: t });
		if (!catalog) {
			throw ApplicationError.ServerError('Any catalog messages hasn`t been found');
		}
		res.status(200).send(catalog);
		t.commit();
	} catch (err) {
		t.rollback();
		next(err);
	}
};

module.exports.updateNameCatalog = async (req, res, next) => {
	const t = await sequelize.transaction();
	try {
		const { tokenData: { userId }, body: { catalogId: _id, catalogName } } = req;
		const catalog = await chatService.updateCatalog({ catalogName }, { id: _id, userId }, t);
		t.commit();
		res.status(200).send(catalog);
	} catch (err) {
		t.rollback();
		next(err);
	}
};

module.exports.addNewChatToCatalog = async (req, res, next) => {
	const t = await sequelize.transaction();
	try {
		const { tokenData: { userId }, body: { catalogId: _id, chatId } } = req;
		const catalog = await chatService.updateCatalog({
			chats: Sequelize.fn('array_append', Sequelize.col('chats'), chatId),
		}, { id: _id, userId }, t);
		res.status(200).send(catalog);
		t.commit();
	} catch (err) {
		t.rollback();
		next(err);
	}
};

module.exports.removeChatFromCatalog = async (req, res, next) => {
	const t = await sequelize.transaction();
	try {
		const { tokenData: { userId }, body: { catalogId: _id, chatId } } = req;
		const catalog = await chatService.updateCatalog({
			chats: Sequelize.fn('array_remove', Sequelize.col('chats'), chatId),
		}, { id: _id, userId }, t);
		res.status(200).send(catalog);
		t.commit();
	} catch (err) {
		t.rollback();
		next(err);
	}
};

module.exports.deleteCatalog = async (req, res, next) => {
	try {
		const { params: { catalogId } } = req;
		const deleteCatalog = await Catalog.destroy({ where: { id: catalogId } });
		if (!deleteCatalog) {
			throw ApplicationError.ServerError('Any catalog messages hasn`t been delete');
		}
		res.sendStatus(res.statusCode);
	} catch (err) {
		next(err);
	}
};

