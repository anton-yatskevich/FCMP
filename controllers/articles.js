const Article = require('../models/Article');

function getArticles() {
    return Article.find({});
}

function getArticle(id) {
    return Article.findOne({ _id: id });
}

function saveArticle(article) {
    console.log(article);
    return getArticles()
        .then(articles => {
            const articleWithId = Object.assign({}, article);
            const ArticleModel = new Article(articleWithId);
            return ArticleModel.save();
        });
}

function updateArticle(id, body) {
    return Article.updateOne({ _id: id }, body, { upsert: true })
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
    return Article.deleteOne({ _id: id })
        .then((res) => {
            if (!res.deletedCount) {
                return JSON.stringify({status: 404, message: 'Incorrect article id'});
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