import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__content');
    this._inputList = Array.from(this._popup.querySelectorAll('.popup__field'));
  }

  //Метод сбора данных  всех полей формы
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
  // Метод закрытия  и сброса формы
  close() {
    super.close();
    this._form.reset();
  }

  //Метод добавления слушателя клика кнопке закрытия попапа и добавление обработчика сабмита формы
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
}
