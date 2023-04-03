import './index.css';

import {
  initialCards,
  buttonOpenElem,
  popupEditForm,
  popupName,
  popupProfession,
  buttonAddElement,
  popupAddForm,
} from '../utils/constants.js';
import { Card } from '../components/Card.js';
import {
  enableValidationObj,
  FormValidator,
} from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

//Создание экземпляра класса UserInfo
const userInfo = new UserInfo({
  nameSelector: '.profile__info-title',
  jobSelector: '.profile__info-subtitle',
});

// Открытие модального окна профиля, c заполнеными полями формы
const openEditProfile = () => {
  const { name, job } = userInfo.getUserInfo();
  popupName.value = name;
  popupProfession.value = job;
  formProfileValidator.disableValidation();
  popupEdit.open();
};

//Заполнение формы данными
const handleProfileFormSubmit = (data) => {
  userInfo.setUserInfo(data);
  popupEdit.close();
};

//Создание экземпляра класса PopupWithForm для попапа профиля
const popupEdit = new PopupWithForm(
  '.popup_edit-form',
  handleProfileFormSubmit
);
popupEdit.setEventListeners();

buttonOpenElem.addEventListener('click', openEditProfile);

//Создание экземпляра класса PopupWithForm для попапа с картинкой
const popupImage = new PopupWithImage('.popup-card');
popupImage.setEventListeners();

//Создание экземпляра класса Section для отрисовки массива карточек
const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  },
  '.elements'
);

cardList.renderItems();

//Создания новой карточки
function createCard(item) {
  const card = new Card(item, '#cards-template', () =>
    handleCardClick(item.name, item.link)
  );

  return card.generateCard();
}
//Заполнение формы создания карточки, отправка данных
const handleSubmitCard = ({ name, link }) => {
  cardList.prependItem(createCard({ name, link }));
  popupAddCardForm.close();
  console.log({ name, link });
};

// Открытие попапа с карточкой
function handleCardClick(name, link) {
  popupImage.open(name, link);
}

//Создание экземпляра класса PopupWithForm для попапа добавления карточек
const popupAddCardForm = new PopupWithForm('.popup_add-form', handleSubmitCard);
popupAddCardForm.setEventListeners();

//Открытие модального окна добавления карточек
const handleAddCardFormSubmit = () => {
  formCardValidator.disableValidation();
  popupAddCardForm.open();
};

buttonAddElement.addEventListener('click', handleAddCardFormSubmit);

//Создание экземпляра класса FormValidator для попапа профиля
const formProfileValidator = new FormValidator(
  enableValidationObj,
  popupEditForm
);
//Создание экземпляра класса FormValidator для попапа добавления карточек
const formCardValidator = new FormValidator(enableValidationObj, popupAddForm);

formProfileValidator.enableValidation();
formCardValidator.enableValidation();
