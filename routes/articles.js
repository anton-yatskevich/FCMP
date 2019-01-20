const express = require('express');
const articlesCtrl = require('../controllers/articles');

const router = express.Router();

router.get('/', (req, res, next) => {
    articlesCtrl.getArticles()
        .then(articles => {
            if (articles) {
                res.json(articles);
            } else {
                next({status: 404, message: 'Articles not found'});
            }
        })
        .catch(() => {
            next();
        })
});

router.get('/:id', (req, res, next) => {
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

router.post('/', (req, res, next) => {
    articlesCtrl.saveArticle(req.body)
        .then((err) => {
            if (err) {
                next(err);
            } else {
                res.end('Saved')
            }
        })
        .catch(() => {
            next();
        });
});

router.put('/:id', (req, res, next) => {
    articlesCtrl.updateArticle(req.params.id, req.body)
        .then((err) => {
            if (err) {
                next(err);
            } else {
                res.end('Updated');
            }
        })
        .catch(() => {
            next();
        });
});

router.delete('/:id', (req, res, next) => {
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