export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }
  //Метод возвращения карточки
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }
  //Метод наполнения карточек содержимым
  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardImage = this._cardElement.querySelector('.element__image');
    this._cardTitle = this._cardElement.querySelector('.element__title');
    this._buttonDelete = this._cardElement.querySelector(
      '.element__button-delete'
    );
    this._buttonLike = this._cardElement.querySelector('.element__button-like');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    this._setEventListeners();
    return this._cardElement;
  }
  //Метод добавления лайка на карточке
  _handleLikeCard() {
    this._buttonLike.classList.toggle('element__button-like_active');
  }
  //Метод удаления карточки
  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }
  //Метод добавления слушателя клика кнопкам лайка, удаления и открытия карточки
  _setEventListeners() {
    this._buttonLike.addEventListener('click', () => {
      this._handleLikeCard();
    });
    this._buttonDelete.addEventListener('click', () => {
      this._handleDeleteCard();
    });
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}
