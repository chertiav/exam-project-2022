const { Router } = require('express');
//=======================================================
const { hashPassMiddle, validators } = require('../middlewares');
const { authController } = require('../controllers');

const authRouter = new Router();

authRouter.post(
	'/registration',
	validators.validateRegistrationData,
	hashPassMiddle.hashPass,
	authController.registration,
);

authRouter.post(
	'/login',
	validators.validateLogin,
	authController.login,
);

module.exports = authRouter;
