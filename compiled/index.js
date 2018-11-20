"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var articlesContainer = document.getElementById('news-articles-wrapper');

function renderPopularNews(_x) {
  return _renderPopularNews.apply(this, arguments);
}

function _renderPopularNews() {
  _renderPopularNews = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(source) {
    var headerText, url, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            headerText = 'Most popular news:';
            url = getUrl(TOP_NEWS_BASE_URL, API_KEY, source);
            _context.next = 4;
            return loadData(url);

          case 4:
            response = _context.sent;
            createNewsList(response, headerText, articlesContainer, createNewsArticle);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _renderPopularNews.apply(this, arguments);
}

function onChangeHandler(source) {
  articlesContainer.innerHTML = '';
  renderPopularNews(source);
}

function renderSources() {
  return _renderSources.apply(this, arguments);
}

function _renderSources() {
  _renderSources = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var selectNodeWrapper, labelText, sourcesUrl, response, selectNode;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            selectNodeWrapper = document.getElementById('select-wrapper');
            labelText = 'Select news source: ';
            sourcesUrl = getUrl(SOURCES_BASE_URL, API_KEY);
            _context2.next = 5;
            return loadData(sourcesUrl);

          case 5:
            response = _context2.sent;
            selectNode = createSelectNode(response, labelText, selectNodeWrapper, createSelectOption);
            selectNode.addEventListener('change', function (e) {
              return onChangeHandler(e.target.value);
            });

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _renderSources.apply(this, arguments);
}

function initApp() {
  renderSources();
  renderPopularNews();
}

document.addEventListener('DOMContentLoaded', initApp());