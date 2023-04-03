export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  //Метод отрисовки всех элементов
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
  // Метод добавления элемента в конец контейнера
  addItem(element) {
    this._container.append(element);
  }
  // Метод добавления элемента в начало контейнера
  prependItem(element) {
    this._container.prepend(element);
  }
}
