import { enableValidation } from './validate.js';
import { enableValidationObj } from './validate.js';

/*Переменные профиля*/
const buttonCloseElemEdit = document.querySelector('.popup__button-close-edit');
const buttonOpenElem = document.querySelector('.profile__button-edit');
const popupEdit = document.querySelector('.popup_edit-form');
const popupEditForm = document.querySelector('.popup__content-edit');
const popupName = document.querySelector('.popup__field_type_username');
const popupProfession = document.querySelector('.popup__field_type_profession');
const profileInfoTitle = document.querySelector('.profile__info-title');
const profileInfoSubtitle = document.querySelector('.profile__info-subtitle');

/*Переменные попапа добавления карточек*/
const buttonCloseElemAdd = document.querySelector('.popup__button-close-add');
const buttonAddElement = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popup_add-form');
const popupAddForm = document.querySelector('.popup__content-add');
const cardName = document.querySelector('.popup__field_type_cardname');
const cardLink = document.querySelector('.popup__field_type_picturelink');

/*Переменные попапа с карточкой*/
const buttonCloseElemCard = document.querySelector('.popup__button-close-card');
const popupCardImage = document.querySelector('.popup__card-image');
const popupCardTitle = document.querySelector('.popup__card-title');
const popupCard = document.querySelector('.popup-card');
const cardsTemplate = document
  .querySelector('#cards-template')
  .content.querySelector('.element');
const cardsContainer = document.querySelector('.elements');

//Закрытие popup кликом на esc
const closePopupWithEsc = (event) => {
  if (event.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

//Функция закрытия popup кликом по оверлей
const closePopupWithOverlay = (evt) => {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
};

// Функция закрытия popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupWithEsc);
}

// Функция открытия popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupWithEsc);
}

// Заполнение popup профиля и отправка данных
const handleEditFormSubmit = (evt) => {
  evt.preventDefault();
  profileInfoTitle.textContent = popupName.value;
  profileInfoSubtitle.textContent = popupProfession.value;
  closePopup(popupEdit);
};

// Функция извлечения показателей из попапа профиля
const handleExtractionProfileForm = (evt) => {
  popupName.value = profileInfoTitle.textContent;
  popupProfession.value = profileInfoSubtitle.textContent;
  openPopup(popupEdit);
  enableValidation(enableValidationObj);
};

// Задаем функцию лайка
const handlelikeCard = function (evt) {
  evt.target.classList.toggle('element__button-like_active');
};

popupEdit.addEventListener('click', closePopupWithOverlay);
popupAdd.addEventListener('click', closePopupWithOverlay);
popupCard.addEventListener('click', closePopupWithOverlay);
buttonOpenElem.addEventListener('click', handleExtractionProfileForm);
popupEditForm.addEventListener('submit', handleEditFormSubmit);
buttonCloseElemEdit.addEventListener('click', function () {
  closePopup(popupEdit);
});

//Открытие попапа картинки

const openPopupImage = function (data) {
  popupCardImage.src = data.link;
  popupCardImage.alt = data.link;
  popupCardTitle.textContent = data.name;
  openPopup(popupCard);
};

// создание карточки и попапа карточки
const createPlaceCard = function (data) {
  const cardElement = cardsTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardElement.querySelector('.element__title').textContent = data.name;
  cardElement
    .querySelector('.element__button-like')
    .addEventListener('click', handlelikeCard);
  cardElement
    .querySelector('.element__button-delete')
    .addEventListener('click', function () {
      cardElement.remove();
    });
  cardImage.addEventListener('click', () => openPopupImage(data));
  return cardElement;
};

// Oткрытие попапа добавления карточек
const handleAddPopupOpen = () => {
  openPopup(popupAdd);
  popupAddForm.reset();
  enableValidation(enableValidationObj);
};

// Закрытие попапа карточки
buttonCloseElemCard.addEventListener('click', function () {
  closePopup(popupCard);
});

// Функция добавления новой карточки
const handleAddNewCards = function (data) {
  cardsContainer.prepend(createPlaceCard(data));
};

// Заполнение popup добавления карточки и отправка данных
const handleAddCard = function (evt) {
  evt.preventDefault();
  const data = {};
  data.link = cardLink.value;
  data.name = cardName.value;
  handleAddNewCards(data);
  closePopup(popupAdd);
};

// Вывод массива карточек
const cardList = initialCards.map(function (data) {
  cardsContainer.append(createPlaceCard(data));
  return createPlaceCard(data);
});

popupAddForm.addEventListener('submit', handleAddCard);
buttonAddElement.addEventListener('click', handleAddPopupOpen);
buttonCloseElemAdd.addEventListener('click', function () {
  closePopup(popupAdd);
});
