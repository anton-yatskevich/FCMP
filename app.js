require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');
const router = require('./routes')
const errorHandler = require('./middlewares/errorHandler')
const passport = require('./config/passport');
const session = require('express-session');
const { MONGODB_URL, APP_PORT, SECRET } = process.env;

const app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname, './logs/server.log'), { flags: 'a' })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
}));
app.use(morgan(':method :url :status :date[web]', { stream: accessLogStream }));
app.use(passport.initialize());
app.use(passport.session());
app.use(router);
app.use(errorHandler);

mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
mongoose.connection
    .on('error', console.log)
    .once('open', () => app.listen(APP_PORT, () => console.log(`App listening on port ${APP_PORT}...`)));

