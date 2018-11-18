"use strict";

function createNewsArticle(articleData, parentNode) {
  var source = articleData.source,
      title = articleData.title,
      description = articleData.description,
      url = articleData.url,
      urlToImage = articleData.urlToImage,
      publishedAt = articleData.publishedAt;
  var dateArr = publishedAt.split('T');
  var time = dateArr[1].slice(0, 5);
  var publishDate = "".concat(dateArr[0], " ").concat(time);

  if (title && description && url && urlToImage) {
    var article = document.createElement('article');
    article.innerHTML = "\n      <a href=\"".concat(url, "\"><img class=\"article-image\" src=").concat(urlToImage, " alt=\"article-image\"></a>\n      <div class=\"article-info\">\n        <a href=\"").concat(url, "\"><h4>").concat(title, "</h4></a>\n        <div class=\"article-description\">\n            <p>").concat(description, "</p>\n            <p class=\"article-description-footer\"><a href='#'>").concat(source.name, "</a><span>").concat(publishDate, "</span></p>\n        </div>\n      </div>");
    parentNode.appendChild(article);
  }
}