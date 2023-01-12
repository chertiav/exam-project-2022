const { Router } = require('express');
//=======================================
const { checkToken, basicMiddlewares, upload, pagination } = require('../middlewares');
const { offerController } = require('../controllers');

const offerRouter = new Router();

offerRouter.post(
	'/addNewOffer',
	checkToken.checkToken,
	upload.uploadLogoFiles,
	basicMiddlewares.canSendOffer,
	offerController.addNewOffer,
);

offerRouter.patch(
	'/setOfferStatus',
	checkToken.checkToken,
	basicMiddlewares.onlyForCustomerWhoCreateContest,
	offerController.setOfferStatus,
);

offerRouter.get(
	'/getAllOffers',
	checkToken.checkToken,
	pagination.pagination,
	offerController.getAllOffersByContestId,
);

offerRouter.patch(
	'/changeMark',
	checkToken.checkToken,
	basicMiddlewares.onlyForCustomer,
	offerController.changeMark,
);

module.exports = offerRouter;
