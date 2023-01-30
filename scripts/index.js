const buttonOpenElem = document.querySelector('.profile__button-edit');
const popupElem = document.querySelector('.popup');
const buttonCloseElem = document.querySelector('.popup__button-close');
let popupInfo = document.querySelector('.popup__content');
let popupName = document.querySelector('.popup__field_name');
let popupProfession = document.querySelector('.popup__field_profession');
let profileInfoTitle = document.querySelector('.profile__info-title');
let profileInfoSubtitle = document.querySelector('.profile__info-subtitle');


const handlebuttonOpenElemClick = () => {
	popupElem.classList.add('popup_opened');
}

const handlebuttonCloseElemClick = () => {
	popupElem.classList.remove('popup_opened');
}

const handleFormSubmit = (evt) => {
	evt.preventDefault();
	profileInfoTitle.textContent=popupName.value;
	profileInfoSubtitle.textContent=popupProfession.value;
	handlebuttonCloseElemClick();
}

popupElem.addEventListener('submit', handleFormSubmit);


buttonOpenElem.addEventListener('click', () => {
	popupName.value=profileInfoTitle.textContent;
	popupProfession.value=profileInfoSubtitle.textContent;
	handlebuttonOpenElemClick();
});

buttonCloseElem.addEventListener('click', handlebuttonCloseElemClick);
buttonOpenElem.addEventListener('submit', handleFormSubmit);




