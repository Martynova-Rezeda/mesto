//Функция добавления класса с ошибкой
const showInputError = (formElement, inputElement, errorMessage, object) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(object.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(object.errorClass);
};

//Функция удаления класса с ошибкой
const hideInputError = (formElement, inputElement, object) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(object.inputErrorClass);
  errorElement.classList.add(object.errorClass);
  errorElement.textContent = '';
};

//Функция для смены состояния кнопки отправки
export const toggleButtonState = (formElement, object) => {
  const buttonSubmit = formElement.querySelector(object.submitButtonSelector);
  const isFormValid = formElement.checkValidity();
  buttonSubmit.disabled = !isFormValid;
  console.log(!isFormValid);
  buttonSubmit.classList.toggle(object.inactiveButtonClass, !isFormValid);
};

//Функция проверки поля на валидность
const isValid = (formElement, inputElement, object) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      object
    );
  } else {
    hideInputError(formElement, inputElement, object);
  }
};

//Добавляем обработчик всем полям формы
const setEventListeners = (formElement, object) => {
  const inputList = Array.from(
    formElement.querySelectorAll(object.inputSelector)
  );
  toggleButtonState(formElement, object);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement, object);
      toggleButtonState(formElement, object);
    });
  });
};

//Добавляем обработчик всем формам
export const enableValidation = (object) => {
  const formList = Array.from(document.querySelectorAll(object.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, object);
  });
};

enableValidation(enableValidationObj);
