"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SOURCES_BASE_URL = exports.TOP_NEWS_BASE_URL = exports.API_KEY = void 0;
var API_KEY = '8f7b5cd972e04791b29c2483187d776e';
exports.API_KEY = API_KEY;
var TOP_NEWS_BASE_URL = 'https://newsapi.org/v2/top-headlines?';
exports.TOP_NEWS_BASE_URL = TOP_NEWS_BASE_URL;
var SOURCES_BASE_URL = 'https://newsapi.org/v2/sources?';
exports.SOURCES_BASE_URL = SOURCES_BASE_URL;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(data, headerText, parentNode, callback) {
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(articleData, parentNode) {
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(data, textValue, parentNode, callback) {
  var sources = data.sources;
  var defaultOption = {
    name: 'All sources',
    id: ''
  };
  var wrapper = document.createDocumentFragment();
  var selectNode = document.createElement('select');
  var label = document.createElement('label');
  label.textContent = textValue;
  callback(defaultOption, selectNode);
  sources.map(function (source) {
    return callback(source, selectNode);
  });
  wrapper.appendChild(label);
  wrapper.appendChild(selectNode);
  parentNode.appendChild(wrapper);
  return selectNode;
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(source, parentNode) {
  var name = source.name,
      id = source.id;
  var option = document.createElement('option');
  option.value = id;
  option.textContent = name;
  parentNode.appendChild(option);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(BASE_URL, API_KEY, source) {
  var url;

  if (source) {
    url = "".concat(BASE_URL, "sources=").concat(source, "&apiKey=").concat(API_KEY);
  } else {
    url = "".concat(BASE_URL, "country=us&apiKey=").concat(API_KEY);
  }

  return url;
}
"use strict";

var _constants = require("./constants.js");

var _createNewsArticle = _interopRequireDefault(require("./createNewsArticle.js"));

var _loadData = _interopRequireDefault(require("./loadData.js"));

var _createArticlesList = _interopRequireDefault(require("./createArticlesList.js"));

var _createSelectElement = _interopRequireDefault(require("./createSelectElement.js"));

var _createSelectOption = _interopRequireDefault(require("./createSelectOption.js"));

var _getUrl = _interopRequireDefault(require("./getUrl.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var articlesContainer = document.getElementById('news-articles-wrapper');

function renderPopularNews(source) {
  var headerText = 'Most popular news:';
  var url = (0, _getUrl.default)(_constants.TOP_NEWS_BASE_URL, _constants.API_KEY, source);
  (0, _loadData.default)(url, headerText, _createArticlesList.default, articlesContainer, _createNewsArticle.default).then(function (data) {
    return (0, _createArticlesList.default)(data, headerText, articlesContainer, _createNewsArticle.default);
  }).catch(function (err) {
    throw new Error(err);
  });
}

function onChangeHandler(source) {
  articlesContainer.innerHTML = '';
  renderPopularNews(source);
}

function renderSources() {
  var selectNodeWrapper = document.getElementById('select-wrapper');
  var labelText = 'Select news source: ';
  var sourcesUrl = (0, _getUrl.default)(_constants.SOURCES_BASE_URL, _constants.API_KEY);
  (0, _loadData.default)(sourcesUrl).then(function (data) {
    return (0, _createSelectElement.default)(data, labelText, selectNodeWrapper, _createSelectOption.default);
  }).then(function (node) {
    return node.addEventListener('change', function (e) {
      return onChangeHandler(e.target.value);
    });
  }).catch(function (err) {
    throw new Error(err);
  });
}

function initApp() {
  renderSources();
  renderPopularNews();
}

document.addEventListener('DOMContentLoaded', initApp());
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(url) {
  return fetch(url).then(function (res) {
    return res.json();
  }).catch(function (err) {
    throw new Error(err);
  });
}
