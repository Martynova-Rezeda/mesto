import './index.css';

import {
  buttonOpenElem,
  popupEditForm,
  popupName,
  popupProfession,
  buttonAddElement,
  popupAddForm,
  popupUserAvatarForm,
  buttonChangeAvatar,
  usersAvatar,
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
import { Api } from '../components/Api.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';

//Создание экземпляра класса UserInfo
const userInfo = new UserInfo({
  nameSelector: '.profile__info-title',
  jobSelector: '.profile__info-subtitle',
  avatarSelector: '.profile__avatar',
});

//Создание экземпляра класса PopupWithConfirmation для попапа удаления карточки
const popupDeleteCard = new PopupWithConfirmation('.popup-delete-card');
popupDeleteCard.setEventListeners();

//Создание экземпляра класса PopupWithForm для попапа с картинкой
const popupImage = new PopupWithImage('.popup-card');
popupImage.setEventListeners();

//Создание новой карточки
const createCard = (data) => {
  const card = new Card(
    {
      data: data,
      userId: userInfo.getUserId(),
      handleCardClick: () => {
        popupImage.open(data);
      },
      handleDeleteClick: () => {
        popupDeleteCard.open();
        popupDeleteCard.setSubmitActionForm(() => {
          api
            .deleteCard(card.getId())
            .then(() => {
              card.handleDeleteCard();
              popupDeleteCard.close();
            })
            .catch((error) => console.log(`Ошибка ${error}`));
        });
      },
      handleAddLikeTracker: (isLike) => {
        if (isLike) {
          api
            .removeLike(card.getId())
            .then(card.handleDeleteLikeCard())
            .catch((error) => {
              console.log(`Ошибка ${error} при попытке удаления лайка`);
            });
        } else {
          api
            .addLike(card.getId())
            .then(card.handleLikeCard())
            .catch((error) => {
              console.log(`Ошибка ${error} при попытке поставить лайк`);
            });
        }
      },
    },
    '#cards-template'
  );
  return card.generateCard();
};

//Создание экземпляра класса Section для отрисовки массива карточек
const cardList = new Section(
  {
    renderer: (data) => {
      cardList.addItem(createCard(data));
    },
  },
  '.elements'
);

//Создание экземпляра класса Api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: 'e03190d5-8e78-4019-a57e-e50dca931db9',
    'Content-Type': 'application/json',
  },
});

//Получение информации о пользователе и массива карточек с сервера и отрисовка на странице
Promise.all([api.getUserProfile(), api.getInitialCards()])
  .then(([userProfileResult, initialCardsResult]) => {
    userInfo.setUserInfo(userProfileResult);
    cardList.renderItems(initialCardsResult);
  })
  .catch((err) => console.log(`Error:${err}`));

// Открытие модального окна профиля, c заполнеными полями формы
const openEditProfile = () => {
  const { name, job } = userInfo.getUserInfo();
  popupName.value = name;
  popupProfession.value = job;
  formProfileValidator.disableValidation();
  popupEdit.open();
};

//Заполнение формы  профиля данными, отправка данных
const handleProfileFormSubmit = (data) => {
  popupEdit.renderLoading(true);
  api
    .updateUserProfile(data)
    .then((data) => {
      console.log(data);
      userInfo.setUserInfo(data);
      popupEdit.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      popupEdit.renderLoading(false);
    });
};

//Создание экземпляра класса PopupWithForm для попапа профиля
const popupEdit = new PopupWithForm(
  '.popup_edit-form',
  handleProfileFormSubmit
);

popupEdit.setEventListeners();

buttonOpenElem.addEventListener('click', openEditProfile);

//Заполнение формы создания карточки, отправка данных
const handleSubmitCard = (data) => {
  popupAddCardForm.renderLoading(true);
  api
    .addNewCard(data)
    .then((data) => {
      cardList.prependItem(createCard(data));
    })
    .catch((error) =>
      console.log(`Ошибка ${error} при попытке создания карточки`)
    )
    .finally(() => {
      popupAddCardForm.renderLoading(false);
      popupAddCardForm.close();
    });
};

//Создание экземпляра класса PopupWithForm для попапа добавления карточек
const popupAddCardForm = new PopupWithForm('.popup_add-form', handleSubmitCard);
popupAddCardForm.setEventListeners();

//Открытие модального окна добавления карточек
const handleAddCardFormSubmit = () => {
  formCardValidator.disableValidation();
  popupAddCardForm.open();
};

buttonAddElement.addEventListener('click', handleAddCardFormSubmit);

//Заполнение формы смены аватара, отправка данных
const handleAvatarFormSubmit = (data) => {
  popupUserAvatar.renderLoading(true);
  api
    .updateUserAvatar(data)
    .then((data) => {
      usersAvatar.src = data.avatar;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      popupUserAvatar.renderLoading(false);
      popupUserAvatar.close();
    });
};
//Создание экземпляра класса PopupWithForm для попапа смены аватара
const popupUserAvatar = new PopupWithForm(
  '.popup_update-avatar-form',
  handleAvatarFormSubmit
);
popupUserAvatar.setEventListeners();

//Открытие модального окна смены аватара
const openAvatarForm = () => {
  popupUserAvatar.open();
  formAvatarValidator.disableValidation();
};

buttonChangeAvatar.addEventListener('click', openAvatarForm);

//Создание экземпляра класса FormValidator для попапа профиля
const formProfileValidator = new FormValidator(
  enableValidationObj,
  popupEditForm
);
//Создание экземпляра класса FormValidator для попапа добавления карточек
const formCardValidator = new FormValidator(enableValidationObj, popupAddForm);

//Создание экземпляра класса FormValidator для попапа смены аватара
const formAvatarValidator = new FormValidator(
  enableValidationObj,
  popupUserAvatarForm
);
formProfileValidator.enableValidation();
formCardValidator.enableValidation();
formAvatarValidator.enableValidation();
