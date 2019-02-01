const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema ({
    id: Number,
    source: {
        name: String
    },
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: { type: Date, default: Date.now },
    content: String
});

module.exports = mongoose.model('articles', ArticleSchema);
