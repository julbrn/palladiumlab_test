export default class Popup {
  constructor(popupSelector, buttonSelector) {
    this.popup = document.querySelector(popupSelector);
    this.button = document.querySelector(buttonSelector);
  }

  openPopup() {
    this.popup.classList.add('active');
    document.body.style.overflow = 'hidden';
  }


  closePopup() {
    this.popup.classList.remove('active');
    document.body.style.overflow = '';
  }

  setEventListeners() {
    this.button.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.closePopup();
    });
  }

  setOpeningTimeout() {
    setTimeout(() => {
      this.openPopup();
    }, 8000);
  }

}
