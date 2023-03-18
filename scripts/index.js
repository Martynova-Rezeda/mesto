import { initialCards } from './array.js';
import { Card } from './Card.js';
import { enableValidationObj, FormValidator } from './FormValidator.js';
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
const buttonCloseElemCard = document.querySelector('.popup__button-close-card');
const popupCardImage = document.querySelector('.popup__card-image');
const popupCardTitle = document.querySelector('.popup__card-title');

/*Переменные попапа с карточкой*/
const popupCard = document.querySelector('.popup-card');
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
const openModalProfile = (evt) => {
  openPopup(popupEdit);
  popupName.value = profileInfoTitle.textContent;
  popupProfession.value = profileInfoSubtitle.textContent;
  formProfileValidator.disableValidation();
};

popupEdit.addEventListener('click', closePopupWithOverlay);
popupAdd.addEventListener('click', closePopupWithOverlay);
popupCard.addEventListener('click', closePopupWithOverlay);
buttonOpenElem.addEventListener('click', openModalProfile);
popupEditForm.addEventListener('submit', handleEditFormSubmit);
buttonCloseElemEdit.addEventListener('click', function () {
  closePopup(popupEdit);
});

//Открытие попапа картинки

function openPopupImage(name, link) {
  popupCardImage.src = link;
  popupCardImage.alt = link;
  popupCardTitle.textContent = name;
  openPopup(popupCard);
}

// Oткрытие попапа добавления карточек
const handleAddPopupOpen = () => {
  openPopup(popupAdd);
  popupAddForm.reset();
  formCardValidator.disableValidation();
};

// Закрытие попапа карточки
buttonCloseElemCard.addEventListener('click', function () {
  closePopup(popupCard);
});

//Функция создания новой карточки
function createCard(data) {
  const card = new Card(data, '#cards-template', openPopupImage);
  const cardElement = card.generateCard();
  return cardElement;
}

// Заполнение popup добавления карточки и отправка данных
const handleAddCard = function (evt) {
  evt.preventDefault();
  const data = {};
  data.link = cardLink.value;
  data.name = cardName.value;
  cardsContainer.prepend(createCard(data));
  closePopup(popupAdd);
};

popupAddForm.addEventListener('submit', handleAddCard);
buttonAddElement.addEventListener('click', handleAddPopupOpen);
buttonCloseElemAdd.addEventListener('click', function () {
  closePopup(popupAdd);
});

initialCards.forEach((item) => {
  cardsContainer.append(createCard(item));
});

const formProfileValidator = new FormValidator(
  enableValidationObj,
  popupEditForm
);
const formCardValidator = new FormValidator(enableValidationObj, popupAddForm);

formProfileValidator.enableValidation();
formCardValidator.enableValidation();
