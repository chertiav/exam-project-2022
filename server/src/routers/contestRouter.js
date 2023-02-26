const { Router } = require('express');
//=======================================
const { checkToken, basicMiddlewares, upload, pagination } = require('../middlewares');
const { contestController } = require('../controllers');

const contestRouter = new Router();

contestRouter.get(
	'/dataForContest',
	checkToken.checkToken,
	contestController.dataForContest,
);

contestRouter.get(
	'/getCustomersContests',
	checkToken.checkToken,
	pagination.pagination,
	contestController.getCustomersContests,
);

contestRouter.get(
	'/getAllContests',
	checkToken.checkToken,
	basicMiddlewares.onlyForCreative,
	pagination.pagination,
	contestController.getContests,
);

contestRouter.get(
	'/getAllContestsForModerator',
	checkToken.checkToken,
	basicMiddlewares.onlyForModerator,
	pagination.pagination,
	contestController.getContestsForModerator,
);

contestRouter.get(
	'/getContestById/:contestId',
	checkToken.checkToken,
	basicMiddlewares.canGetContest,
	contestController.getContestById,
);

contestRouter.get(
	'/getCountOffers/:contestId',
	checkToken.checkToken,
	basicMiddlewares.canGetContest,
	contestController.getCountOffersByContest,
);

contestRouter.patch(
	'/updateContest',
	checkToken.checkToken,
	upload.updateContestFile,
	basicMiddlewares.canUpdateContest,
	contestController.updateContest,
);

module.exports = contestRouter;
