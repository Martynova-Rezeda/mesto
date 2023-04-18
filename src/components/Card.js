export class Card {
  constructor(
    { data, userId, handleCardClick, handleDeleteClick, handleAddLikeTracker },
    templateSelector
  ) {
    this._data = data;
    this._link = data.link;
    this._name = data.name;
    this._like = data.likes.length;
    this._id = data._id;
    this._owner = data.owner._id;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleAddLikeTracker = handleAddLikeTracker;
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
    this._likeCounter = this._cardElement.querySelector(
      '.element__like-counter'
    );
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    this._likeCounter.textContent = this._like;
    this._setEventListeners();
    this._checkDeleteStatus();
    return this._cardElement;
  }

  getId() {
    return this._id;
  }

  //Метод удаления кнопки корзины с карточки, загруженной с сервера
  _checkDeleteStatus() {
    if (this._owner !== this._userId) {
      this._buttonDelete.remove();
    }
  }

  //Метод проверки наличия лайка
  _checkLikeStatus() {
    return this._buttonLike.classList.contains('element__button-like_active');
  }

  //Метод добавления лайка карточке и увеличение значения счетчика лайков
  handleLikeCard() {
    this._buttonLike.classList.add('element__button-like_active');
    this._likeCounter.textContent = ++this._like;
  }

  handleDeleteLikeCard() {
    this._buttonLike.classList.remove('element__button-like_active');
    this._likeCounter.textContent = --this._like;
  }

  //Метод удаления карточки
  handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeCardClick() {
    this._handleAddLikeTracker(this._checkLikeStatus());
  }

  //Метод добавления слушателя клика кнопкам лайка, удаления и открытия карточки
  _setEventListeners() {
    this._buttonLike.addEventListener('click', () => {
      this._handleLikeCardClick();
    });
    this._buttonDelete.addEventListener('click', () => {
      this._handleDeleteClick();
    });
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick();
    });
  }
}
