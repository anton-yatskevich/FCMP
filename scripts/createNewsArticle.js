export default function createArticle(articleData, parentNode) {
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
