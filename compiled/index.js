"use strict";

var articlesContainer = document.getElementById('news-articles-wrapper');

function renderPopularNews(source) {
  var headerText = 'Most popular news:';
  var url = getUrl(TOP_NEWS_BASE_URL, API_KEY, source);
  loadData(url).then(function (data) {
    return createNewsList(data, headerText, articlesContainer, createNewsArticle);
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
  var sourcesUrl = getUrl(SOURCES_BASE_URL, API_KEY);
  loadData(sourcesUrl).then(function (data) {
    return createSelectNode(data, labelText, selectNodeWrapper, createSelectOption);
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