import { API_KEY, TOP_NEWS_URL, SOURCES_URL } from './constants.js';
import createArticle from './createNewsArticle.js';
import getData from './getData.js';
import createNewsList from './createArticlesList.js';
import createSearchNode from './createSearchNode.js';
import createSelectOption from './createSelectOption.js';
import getUrlWithSource from './getUrlWithSource.js';

const articlesContainer = document.getElementById('news-articles-wrapper');

function getMostPopularNews(url) {
  const headerText = 'Most popular news:';
  getData(url, headerText, createNewsList, articlesContainer, createArticle);
}

function onChangeHandler(value) {
  articlesContainer.innerHTML = '';
  if (value) {
    const urlWithSource = getUrlWithSource(value, API_KEY);
    getMostPopularNews(urlWithSource);
  } else {
    getMostPopularNews(TOP_NEWS_URL);
  }
}

function getSources() {
  const searchNodeWrapper = document.getElementById('search-wrapper');
  const nodeText = 'Select news source: ';
  getData(SOURCES_URL, nodeText, createSearchNode, searchNodeWrapper, createSelectOption)
    .then(node => node.addEventListener('change', e => onChangeHandler(e.target.value)));
}

getSources();
getMostPopularNews(TOP_NEWS_URL);
