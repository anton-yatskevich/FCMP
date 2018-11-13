import { API_KEY, TOP_NEWS_BASE_URL, SOURCES_BASE_URL } from './constants.js';
import createArticle from './createNewsArticle.js';
import loadData from './loadData.js';
import createNewsList from './createArticlesList.js';
import createSearchNode from './createSelectElement.js';
import createSelectOption from './createSelectOption.js';
import getUrl from './getUrl.js';

const articlesContainer = document.getElementById('news-articles-wrapper');

function renderPopularNews(source) {
  const headerText = 'Most popular news:';
  const url = getUrl(TOP_NEWS_BASE_URL, API_KEY, source);

  loadData(url, headerText, createNewsList, articlesContainer, createArticle)
    .then(data => createNewsList(data, headerText, articlesContainer, createArticle))
    .catch((err) => {
      throw new Error(err);
    });
}

function onChangeHandler(source) {
  articlesContainer.innerHTML = '';
  renderPopularNews(source);
}

function renderSources() {
  const selectNodeWrapper = document.getElementById('select-wrapper');
  const labelText = 'Select news source: ';
  const sourcesUrl = getUrl(SOURCES_BASE_URL, API_KEY);

  loadData(sourcesUrl)
    .then(data => createSearchNode(data, labelText, selectNodeWrapper, createSelectOption))
    .then(node => node.addEventListener('change', e => onChangeHandler(e.target.value)))
    .catch((err) => {
      throw new Error(err);
    });
}

function initApp() {
  renderSources();
  renderPopularNews();
}

document.addEventListener('DOMContentLoaded', initApp());
