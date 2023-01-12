const { Router } = require('express');
//=======================================================
const { paymentController } = require('../controllers');
const { checkToken, upload, basicMiddlewares, validators } = require('../middlewares');

const paymentRouter = new Router();

paymentRouter.post(
	'/pay',
	checkToken.checkToken,
	basicMiddlewares.onlyForCustomer,
	upload.uploadContestFiles,
	basicMiddlewares.parseBody,
	validators.validateContestCreation,
	paymentController.payment,
);

paymentRouter.patch(
	'/cashout',
	checkToken.checkToken,
	basicMiddlewares.onlyForCreative,
	paymentController.cashout,
);

module.exports = paymentRouter;
