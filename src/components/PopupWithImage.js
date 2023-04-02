import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupCardImage = this._popup.querySelector('.popup__card-image');
    this._popupCardTitle = this._popup.querySelector('.popup__card-title');
  }
  //метод открытия попапа картинки
  open(name, link) {
    super.open();
    this._popupCardTitle.textContent = name;
    this._popupCardImage.alt = name;
    this._popupCardImage.src = link;
  }
}
