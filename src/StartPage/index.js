import './index.css';
import template from './index.html';
import btnText from './buttonText.json';


function goToNewsPage() {
  import( /* webpackChunkName: "newsPage" */ '../NewsPage')
    .then(module => module.default())
}

function initApp() {
  const appContainer = document.getElementById('app-container');
  appContainer.innerHTML = template;

  const goToNewsPageBtn = document.getElementById('show-news-btn');
  goToNewsPageBtn.textContent = btnText.value;
  goToNewsPageBtn.addEventListener('click', goToNewsPage);
}

document.addEventListener('DOMContentLoaded', initApp());
