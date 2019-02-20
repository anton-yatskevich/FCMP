const express = require('express');
const articlesCtrl = require('../controllers/articles');

const router = express.Router();

const isAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	} else {
		res.send('You should login with your username and password');
	}
}

router.get('/', (req, res, next) => {
    articlesCtrl.getArticles()
        .then(articles => {
            if (articles) {
                res.json({status: 'ok', totalResults: articles.length, articles: articles});
            } else {
                next({status: 404, message: 'Articles not found'});
            }
        })
        .catch(() => {
            next();
        })
});

router.get('/:id', isAuthenticated, (req, res, next) => {
    articlesCtrl.getArticle(req.params.id)
        .then(article => {
            if (article) {
                res.render('article', article);
            } else {
                next({status: 404, message: 'Incorrect article id'});
            }
        })
        .catch(() => {
            next();
        });
});

router.post('/', isAuthenticated, (req, res, next) => {
    articlesCtrl.saveArticle(req.body)
        .then(() => {
            res.end('Saved');
        })
        .catch(() => {
            next();
        });
});

router.put('/:id', isAuthenticated, (req, res, next) => {
    articlesCtrl.updateArticle(req.params.id, req.body)
        .then((response) => {
            if (response) {
                res.end(response);
            } else {
                next();
            }
        })
        .catch(() => {
            next();
        });
});

router.delete('/:id', isAuthenticated, (req, res, next) => {
    articlesCtrl.deleteArticle(req.params.id)
        .then((err) => {
            if (err) {
                next(err);
            } else {
                res.end('Deleted');
            }
        })
        .catch(() => {
            next();
        })
})

module.exports = router;