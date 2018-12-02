import popupView from './index.html';
import './index.css';

class ErrorPopup {
  constructor() {
    if (typeof ErrorPopup.instance === 'object') {
      return ErrorPopup.instance;
    }
    ErrorPopup.instance = this;
    this.createPopup();
    return this;
  }

  createPopup() {
    const appContainer = document.getElementById('app-container');
    this.popupContainer = document.createElement('div');
    this.popupContainer.classList.add('error-popup-container', 'hidden');
    this.popupContainer.innerHTML = popupView;
    appContainer.appendChild(this.popupContainer);
    this.popupText = document.getElementById('error-popup-text');
    const closePopupBtn = document.getElementById('close-popup-btn');
    closePopupBtn.addEventListener('click', () => this.closePopup());
  }

  closePopup() {
    this.popupContainer.classList.add('hidden');
    window.removeEventListener('scroll', this.disableScroll);
  }

  show(errorText = 'Something went wrong please try again') {
    this.popupText.textContent = errorText;
    this.popupContainer.classList.remove('hidden');
    this.disableScroll = () => window.scrollTo(0, 0);
    window.addEventListener('scroll', this.disableScroll);
  }
}

export default ErrorPopup;
