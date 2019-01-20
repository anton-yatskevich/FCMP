const fs = require('fs');
const util = require('util');
const path = require('path');

const readfile = util.promisify(fs.readFile);
const writefile = util.promisify(fs.writeFile);

const articlesPath = path.join(__dirname, '../data/articles.json');

function getArticles() {
    return readfile(articlesPath)
        .then(articles => JSON.parse(articles));
}

function getArticle(id) {
    return getArticles()
        .then(articles => articles.find(article => article.id === Number(id)));
}

function saveArticle(article) {
    return getArticles()
        .then(articles => {
            try {
                const id = articles[articles.length - 1].id + 1;
                const articleWithId = Object.assign({}, { id }, article);
                const newArticles = articles.concat(articleWithId);
                
                return writefile(articlesPath, JSON.stringify(newArticles));
            } catch (error) {
                const err = {status: 500, message: 'Something went wrong'};
                return err;
            }
            
        })
}

function updateArticle(id, body) {
    return getArticles()
        .then(articles => {
            try {
                const article = articles.find(article => article.id === Number(id))
                if (article) {
                    const index = articles.indexOf(article);
                    const newArticles = [...articles];
                    newArticles[index] = Object.assign({}, { id: Number(id) }, body);
    
                    return writefile(articlesPath, JSON.stringify(newArticles));
                } else {
                    const articleWithId = Object.assign({}, { id: Number(id) }, body);
                    const newArticles = articles.concat(articleWithId);
                    
                    return writefile(articlesPath, JSON.stringify(newArticles));
                }
            } catch (error) {
                const err = {status: 500, message: 'Something went wrong'};
                return err;
            }
            
        })
}

function deleteArticle(id) {
    return getArticles() 
        .then(articles => {     
            try {
                const newArticles = articles.filter(article => article.id !== Number(id));
                if (articles.length === newArticles.length) {
                    const err = {status: 404, message: 'Article not found'};
                    return err;
                }
                return writefile(articlesPath, JSON.stringify(newArticles));
            } catch (error) {
                const err = {status: 500, message: 'Something went wrong'};
                return err;
            }
            
        })
}

module.exports = {
    getArticles,
    getArticle,
    saveArticle,
    updateArticle,
    deleteArticle
}