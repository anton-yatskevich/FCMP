const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./routes')
const errorHandler = require('./middlewares/errorHandler')
const { MONGODB_URL, APP_PORT } = require('./constants/config');

const app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname, './logs/server.log'), { flags: 'a' })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(morgan(':method :url :status :date[web]', { stream: accessLogStream }));
app.use(router);
app.use(errorHandler);

mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
mongoose.connection
    .on('error', console.log)
    .once('open', () => app.listen(APP_PORT, () => console.log(`App listening on port ${APP_PORT}...`)));

