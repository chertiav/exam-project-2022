const { Router } = require('express');
//==================================================
const { checkToken } = require('../middlewares');
const { chatController } = require('../controllers');

const chatRouter = new Router();


chatRouter
	.post(
		'/newMessage',
		checkToken.checkToken,
		chatController.addMessage,
	);

chatRouter
	.get('/getChat',
		checkToken.checkToken,
		chatController.getChat,
	);

chatRouter
	.get(
		'/getPreview',
		checkToken.checkToken,
		chatController.getPreview,
	);

chatRouter
	.patch(
		'/blackList',
		checkToken.checkToken,
		chatController.blackList,
	);

chatRouter
	.patch(
		'/favorite',
		checkToken.checkToken,
		chatController.favoriteChat,
	);

chatRouter
	.post(
		'/createCatalog',
		checkToken.checkToken,
		chatController.createCatalog,
	);

chatRouter
	.patch(
		'/updateNameCatalog',
		checkToken.checkToken,
		chatController.updateNameCatalog,
	);

chatRouter
	.patch(
		'/addNewChatToCatalog',
		checkToken.checkToken,
		chatController.addNewChatToCatalog,
	);

chatRouter
	.patch(
		'/removeChatFromCatalog',
		checkToken.checkToken,
		chatController.removeChatFromCatalog,
	);

chatRouter
	.delete(
		'/deleteCatalog/:catalogId',
		checkToken.checkToken,
		chatController.deleteCatalog,
	);

chatRouter
	.get(
		'/getCatalogs',
		checkToken.checkToken,
		chatController.getCatalogs,
	);

module.exports = chatRouter;
