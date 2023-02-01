/*Oбъявляем переменные*/
const buttonOpenElem = document.querySelector('.profile__button-edit');
const popupElem = document.querySelector('.popup');
const buttonCloseElem = document.querySelector('.popup__button-close');
let popupInfo = document.querySelector('.popup__content');
let popupName = document.querySelector('.popup__field_type_username');
let popupProfession = document.querySelector('.popup__field_type_profession');
let profileInfoTitle = document.querySelector('.profile__info-title');
let profileInfoSubtitle = document.querySelector('.profile__info-subtitle');

/*Задаем функции открытия и закрытия модального окна*/
const handlebuttonOpenElemClick = () => {
	popupElem.classList.add('popup_opened');
}

const handlebuttonCloseElemClick = () => {
	popupElem.classList.remove('popup_opened');
}

/*Прописываем функции-обработчики событий*/
const handleFormSubmit = (evt) => {
	evt.preventDefault();
	profileInfoTitle.textContent=popupName.value;
	profileInfoSubtitle.textContent=popupProfession.value;
	handlebuttonCloseElemClick();
}

const handleInsertProfile = (evt) => {
	popupName.value=profileInfoTitle.textContent;
	popupProfession.value=profileInfoSubtitle.textContent;
	handlebuttonOpenElemClick();
}

/*прописываем реакции модального окна на действия пользователя*/
buttonCloseElem.addEventListener('click', handlebuttonCloseElemClick);
popupInfo.addEventListener('submit', handleFormSubmit);
buttonOpenElem.addEventListener('click', handleInsertProfile);


