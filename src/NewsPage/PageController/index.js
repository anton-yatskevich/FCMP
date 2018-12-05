import { TOP_NEWS_BASE_URL, SOURCES_BASE_URL } from '../constants';
import getUrl from '../utils/getUrl';
import RequestFactory from '../API/index';
import NewsListCtrl from '../NewsList';
import NewsSourcesSelect from '../NewsSources';
import NewsPageTemplate from './index.html';
import './index.css';

class PageCtrl {
  constructor() {
    this.appWrapper = document.getElementById('app-container');
    this.NewsListCtrl = new NewsListCtrl();
    this.NewsSourcesSelect = new NewsSourcesSelect();
  }

  init() {
    this.renderPage();
    this.renderSources();
    this.renderPopularNews();
  }

  renderPage() {
    this.appWrapper.innerHTML = NewsPageTemplate;
  }

  async renderPopularNews(source) {
    const url = getUrl(TOP_NEWS_BASE_URL, source);
    const { request } = new RequestFactory({ method: 'GET', url });
    const response = await request.send();
    if (response) {
      this.NewsListCtrl.createArticlesList(response);
    }
  }

  async renderSources() {
    const url = getUrl(SOURCES_BASE_URL);
    const { request } = new RequestFactory({ method: 'GET', url });
    const response = await request.send();
    const selectNode = this.NewsSourcesSelect.createSelectNode(response);
    selectNode.addEventListener('change', e => this.renderPopularNews(e.target.value));
  }
}

export default PageCtrl;
