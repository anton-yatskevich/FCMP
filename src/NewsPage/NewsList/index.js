import './index.css';


function createArticle(articleData, parentNode) {
  const {
    source,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
  } = articleData;

  const dateArr = publishedAt.split('T');
  const time = dateArr[1].slice(0, 5);
  const publishDate = `${dateArr[0]} ${time}`;

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

function createArticlesList(data) {
  const { articles } = data;
  const parentNode = document.getElementById('news-articles-wrapper');
  const wrapper = document.createDocumentFragment();
  const newsListHeader = document.createElement('h3');

  newsListHeader.textContent = 'Most popular news:';
  wrapper.appendChild(newsListHeader);
  articles.map(article => createArticle(article, wrapper));
  parentNode.innerHTML = '';
  parentNode.appendChild(wrapper);
}

export default createArticlesList;
