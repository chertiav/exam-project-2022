const { Router } = require('express');
//=======================================================
const { userController } = require('../controllers');
const { checkToken, upload } = require('../middlewares');

const userRouter = new Router();

userRouter.get(
	'/getUser',
	checkToken.checkAuth,
);

userRouter.patch(
	'/updateUser',
	checkToken.checkToken,
	upload.uploadAvatar,
	userController.updateUser,
);

module.exports = userRouter;
