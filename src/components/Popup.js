export class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._buttonCloseEdit = document.querySelector('.popup__button-close-edit');
    this._buttonCloseAdd = document.querySelector('.popup__button-close-add');
    this._buttonCloseCard = document.querySelector('.popup__button-close-card');
  }
  //Метод открытия попапа
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }
  //Метод закрытия попапа
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }
  //Закрытие попапа по кнопке Esc
  _handleEscClose = (event) => {
    if (event.key === 'Escape') {
      this.close();
    }
  };
  //Метод добавления слушателя клика кнопке закрытия попапа и затемненой области вокруг попапа
  setEventListeners() {
    this._buttonCloseEdit.addEventListener('click', () => {
      this.close();
    });
    this._buttonCloseAdd.addEventListener('click', () => {
      this.close();
    });
    this._buttonCloseCard.addEventListener('click', () => {
      this.close();
    });
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
    });
  }
}
