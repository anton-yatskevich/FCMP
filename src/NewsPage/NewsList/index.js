import dateFormatter from '../utils/dateFormatter';
import './index.css';

class NewsListCtrl {
  createArticle(data) {
    const {
      source,
      title,
      description,
      url,
      urlToImage,
      publishedAt,
    } = data;

    const publishDate = dateFormatter(publishedAt);

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
      this.wrapper.appendChild(article);
    }
  }

  createArticlesList({ articles }) {
    this.articles = articles;
    this.wrapper = document.createDocumentFragment();
    const container = document.getElementById('news-articles-wrapper');    
    const newsListHeader = document.createElement('h3');
    newsListHeader.textContent = 'Most popular news:';
    this.wrapper.appendChild(newsListHeader);
    this.articles.map(article => this.createArticle(article));
    container.innerHTML = '';
    container.appendChild(this.wrapper);
  }
}

export default NewsListCtrl;
