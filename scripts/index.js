import { TOP_NEWS_URL } from './constants.js';
import createArticle from './createNewsArticle.js';
import getNews from './getNews.js';
import createNewsList from './createArticlesList.js';

const articlesContainer = document.getElementById('news-articles-wrapper');

function getMostPopularNews() {
  const headerText = 'Most popular news:';
  getNews(TOP_NEWS_URL, headerText, createNewsList, articlesContainer, createArticle);
}

getMostPopularNews();
