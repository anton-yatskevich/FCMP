export default function createNewsList(data, headerText, parentNode, callback) {
  const wrapper = document.createDocumentFragment();
  const { articles } = data;
  const newsListHeader = document.createElement('h3');

  newsListHeader.textContent = headerText;
  wrapper.appendChild(newsListHeader);
  articles.map(article => callback(article, wrapper));
  parentNode.appendChild(wrapper);
}
