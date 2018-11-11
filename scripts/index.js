import { TOP_NEWS_URL } from './constants.js';

const articlesContainer = document.getElementById('news-articles-wrapper');

function createArticle(articleData, parentNode) {
  const {
    title,
    description,
    url,
    urlToImage,
  } = articleData;

  if (title && description && url && urlToImage) {
    const article = document.createElement('article');
    article.innerHTML = `
      <a href="${url}"><img class="article-image" src=${urlToImage} alt="article-image"></a>
      <div class="article-info">
          <a href="${url}"><h3>${title}</h3></a>
          <p>${description}</p>
      </div>`;
    parentNode.appendChild(article);
  }
}

function createNewsList(data) {
  const wrapper = document.createDocumentFragment();
  const { articles } = data;
  articles.map(article => createArticle(article, wrapper));
  articlesContainer.appendChild(wrapper);
}

fetch(TOP_NEWS_URL)
  .then(res => res.json())
  .then(data => createNewsList(data))
  .catch((err) => {
    throw new Error(err);
  });
