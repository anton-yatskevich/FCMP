import { TOP_NEWS_URL } from './constants.js';

const articlesContainer = document.getElementById('news-articles-wrapper');

function createArticle(articleData, parentNode) {
  const {
    source,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
  } = articleData;

  const publishDate = publishedAt.replace('T', ' ').slice(0, -4);
  if (title && description && url && urlToImage) {
    const article = document.createElement('article');
    article.innerHTML = `
      <a href="${url}"><img class="article-image" src=${urlToImage} alt="article-image"></a>
      <div class="article-info">
          <a href="${url}"><h4>${title}</h4></a>
          <div class="article-description">
            <p>${description}</p>
            <p class="article-description-footer"><a href='#'>${source.name}</a><span>${publishDate}</span></p>
          </div>
          
      </div>`;
    parentNode.appendChild(article);
  }
}

function createNewsList(data, headerText) {
  const wrapper = document.createDocumentFragment();
  const { articles } = data;
  const newsListHeader = document.createElement('h3');
  newsListHeader.textContent = headerText;
  wrapper.appendChild(newsListHeader);
  articles.map(article => createArticle(article, wrapper));
  articlesContainer.appendChild(wrapper);
}

function getNews(url, headerText) {
  fetch(url)
    .then(res => res.json())
    .then(data => createNewsList(data, headerText))
    .catch((err) => {
      throw new Error(err);
    });
}

function getMostPopularNews() {
  const newsListHeaderText = 'Most popular news:';

  getNews(TOP_NEWS_URL, newsListHeaderText);
}

getMostPopularNews();
