function errorHandler(err, req, res, next) {
    if (err && err.status && err.message) {
        res.status(err.status);
        res.render('error', err);
    } else {
        res.status(500);
        res.render('error', {status: 500, messge: 'Something went wrong!'});
    }
}

module.exports = errorHandler;