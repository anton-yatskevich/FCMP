import { API_KEY, TOP_NEWS_BASE_URL, SOURCES_BASE_URL } from './constants.js';
import createNewsArticle from './createNewsArticle.js';
import loadData from './loadData.js';
import createNewsList from './createArticlesList.js';
import createSearchNode from './createSelectElement.js';
import createSelectOption from './createSelectOption.js';
import getUrl from './getUrl.js';

const articlesContainer = document.getElementById('news-articles-wrapper');

async function renderPopularNews(source) {
  const headerText = 'Most popular news:';
  const url = getUrl(TOP_NEWS_BASE_URL, API_KEY, source);

  const response = await loadData(url);
  createNewsList(response, headerText, articlesContainer, createNewsArticle);
}

function onChangeHandler(source) {
  articlesContainer.innerHTML = '';
  renderPopularNews(source);
}

async function renderSources() {
  const selectNodeWrapper = document.getElementById('select-wrapper');
  const labelText = 'Select news source: ';
  const sourcesUrl = getUrl(SOURCES_BASE_URL, API_KEY);

  const response = await loadData(sourcesUrl);
  const selectNode = createSearchNode(response, labelText, selectNodeWrapper, createSelectOption);
  selectNode.addEventListener('change', e => onChangeHandler(e.target.value));
}

export default function initApp() {
  renderSources();
  renderPopularNews();
}
