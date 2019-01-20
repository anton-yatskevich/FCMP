const express = require('express');
const articlesRouter = require('./articles')

const router = express.Router();

router.use('/news', articlesRouter);

module.exports = router;