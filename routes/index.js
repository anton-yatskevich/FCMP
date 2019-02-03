const express = require('express');
const articlesRouter = require('./articles');
const authRouter = require('./auth');

const router = express.Router();

router.use('/news', articlesRouter);
router.use('/auth', authRouter);

module.exports = router;