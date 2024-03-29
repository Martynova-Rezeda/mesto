export class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._token = config.headers.authorization;
  }
  //Метод проверки ответа сервера
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //GET-запрос на сервер для загрузки карточек с сервера
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: {
        authorization: this._token,
      },
    }).then(this._checkResponse);
  }

  //GET-запрос  на сервер для загрузки информации о пользователе
  getUserProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        authorization: this._token,
      },
    }).then(this._checkResponse);
  }

  //PATCH-запрос на сервер для изменения данных профиля
  updateUserProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        about: data.job,
      }),
    }).then(this._checkResponse);
  }

  //PATCH-запрос на сервер для смены аватара
  updateUserAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar: avatar.link,
      }),
    }).then(this._checkResponse);
  }

  //POST-запрос на сервер для добавления новой карточки
  addNewCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._checkResponse);
  }

  //DELETE-запрос на сервер для удаления карточки
  deleteCard(_id) {
    return fetch(`${this._baseUrl}/cards/${_id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      },
    }).then(this._checkResponse);
  }

  //PUT-запрос на сервер для добавления лайка
  addLike(_id) {
    return fetch(`${this._baseUrl}/cards/likes/${_id}`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
      },
    }).then(this._checkResponse);
  }

  //DELETE-запрос на сервер для удаления лайка
  removeLike(_id) {
    return fetch(`${this._baseUrl}/cards/likes/${_id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      },
    }).then(this._checkResponse);
  }
}
