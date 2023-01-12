const { Router } = require('express');
//=====================================
const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const contestRouter = require('./contestRouter');
const chatRouter = require('./chatRouter');
const offerRouter = require('./offerRouter');
const paymentRouter = require('./paymentRouter');

const router = new Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/contests', contestRouter);
router.use('/chat', chatRouter);
router.use('/offers', offerRouter);
router.use('/payment', paymentRouter);

module.exports = router;
