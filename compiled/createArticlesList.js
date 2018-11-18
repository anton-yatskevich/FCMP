"use strict";

function createNewsList(data, headerText, parentNode, callback) {
  var articles = data.articles;
  var wrapper = document.createDocumentFragment();
  var newsListHeader = document.createElement('h3');
  newsListHeader.textContent = headerText;
  wrapper.appendChild(newsListHeader);
  articles.map(function (article) {
    return callback(article, wrapper);
  });
  parentNode.appendChild(wrapper);
}