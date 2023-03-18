export const enableValidationObj = {
  formSelector: '.popup__content',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__input-error',
};

export class FormValidator {
  constructor(object, formElement) {
    this._formElement = formElement;
    this._formSelector = object.formSelector;
    this._inputSelector = object.inputSelector;
    this._submitButtonSelector = object.submitButtonSelector;
    this._inactiveButtonClass = object.inactiveButtonClass;
    this._inputErrorClass = object.inputErrorClass;
    this._errorClass = object.errorClass;
    this._buttonSubmit = this._formElement.querySelector(
      this._submitButtonSelector
    );
  }
  //Метод добавления класса с ошибкой
  _showInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    this._errorElement.textContent = inputElement.validationMessage;
    console.log(inputElement);
  }
  //Метод удаления класса с ошибкой
  _hideInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );

    inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.textContent = '';
  }
  //Метод для смены состояния кнопки отправки
  _toggleButtonState() {
    this._isFormValid = this._formElement.checkValidity();
    this._buttonSubmit.disabled = !this._isFormValid;
    this._buttonSubmit.classList.toggle(
      this._inactiveButtonClass,
      !this._isFormValid
    );
  }
  //Метод проверки поля на валидность
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }
  //Метод сброса кнопки и удаление класса ошибки
  disableValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }
  //Добавляем  обработчик всем полям формы
  _setEventListeners() {
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  }
  enableValidation() {
    this._setEventListeners();
  }
}
