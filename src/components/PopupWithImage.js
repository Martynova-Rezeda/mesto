import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupCardImage = this._popup.querySelector('.popup__card-image');
    this._popupCardTitle = this._popup.querySelector('.popup__card-title');
  }
  //метод открытия попапа картинки
  open(data) {
    super.open();
    this._popupCardImage.src = data.link;
    this._popupCardImage.alt = data.name;
    this._popupCardTitle.textContent = data.name;
  }
}
