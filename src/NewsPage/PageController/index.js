import { TOP_NEWS_BASE_URL, SOURCES_BASE_URL } from '../constants';
import { getUrl, loadData } from '../API';
import createNewsList from '../NewsList';
import createSearchNode from '../NewsSources';
import NewsPageTemplate from './index.html';
import './index.css';


function renderPage() {
  const appWrapper = document.getElementById('app-container');
  appWrapper.innerHTML = NewsPageTemplate;
}

async function renderPopularNews(source) {
  const url = getUrl(TOP_NEWS_BASE_URL, source);
  const response = await loadData(url);
  createNewsList(response);
}

async function renderSources() {
  const sourcesUrl = getUrl(SOURCES_BASE_URL);
  const response = await loadData(sourcesUrl);
  const selectNode = createSearchNode(response);
  selectNode.addEventListener('change', e => renderPopularNews(e.target.value));
}

export default function initApp() {
  renderPage();
  renderSources();
  renderPopularNews();
}
