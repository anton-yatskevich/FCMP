const Article = require('../models/Article');

function getArticles() {
    return Article.find({});
}

function getArticle(id) {
    return Article.findOne({ id });
}

function saveArticle(article) {
    return getArticles()
        .then(articles => {
            const id = articles[articles.length - 1].id + 1;
            const articleWithId = Object.assign({}, { id }, article);
            const ArticleModel = new Article(articleWithId);
            return ArticleModel.save();
        });
}

function updateArticle(id, body) {
    return Article.updateOne({ id }, body, { upsert: true })
        .then((res) => {
            if (res.upserted) {
                return 'New article is created'
            } else if (res.nModified) {
                return 'Updated'
            } else {
                return 'No changes'
            }
        });
}

function deleteArticle(id) {
    return Article.deleteOne({ id })
        .then((res) => {
            if (!res.deletedCount) {
                return {status: 404, message: 'Incorrect article id'};
            }
        });
}

module.exports = {
    getArticles,
    getArticle,
    saveArticle,
    updateArticle,
    deleteArticle
}