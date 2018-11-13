export default function (data, headerText, parentNode, callback) {
  const { articles } = data;
  const wrapper = document.createDocumentFragment();
  const newsListHeader = document.createElement('h3');

  newsListHeader.textContent = headerText;
  wrapper.appendChild(newsListHeader);
  articles.map(article => callback(article, wrapper));
  parentNode.appendChild(wrapper);
}
