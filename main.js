(()=>{"use strict";var t=document.querySelector(".profile__button-edit"),e=document.querySelector(".popup__content-edit"),n=document.querySelector(".popup__content-update"),r=document.querySelector(".popup__field_type_username"),o=document.querySelector(".popup__field_type_profession"),i=document.querySelector(".profile__button-add"),u=document.querySelector(".popup__content-add"),a=(document.querySelector(".element__button-delete"),document.querySelector(".profile__avatar-button-edit")),c=document.querySelector(".profile__avatar");function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function t(e,n){var r=e.data,o=e.userId,i=e.handleCardClick,u=e.handleDeleteClick,a=e.handleAddLikeTracker;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=r,this._link=r.link,this._name=r.name,this._like=r.likes.length,this._id=r._id,this._owner=r.owner._id,this._userId=o,this._templateSelector=n,this._handleCardClick=i,this._handleDeleteClick=u,this._handleAddLikeTracker=a}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._cardElement=this._getTemplate(),this._cardImage=this._cardElement.querySelector(".element__image"),this._cardTitle=this._cardElement.querySelector(".element__title"),this._buttonDelete=this._cardElement.querySelector(".element__button-delete"),this._buttonLike=this._cardElement.querySelector(".element__button-like"),this._likeCounter=this._cardElement.querySelector(".element__like-counter"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardTitle.textContent=this._name,this._likeCounter.textContent=this._like,this._setEventListeners(),this._checkDeleteStatus(),this._cardElement}},{key:"getId",value:function(){return this._id}},{key:"_checkDeleteStatus",value:function(){this._owner!==this._userId&&this._buttonDelete.remove()}},{key:"_checkLikeStatus",value:function(){return this._buttonLike.classList.contains("element__button-like_active")}},{key:"handleLikeCard",value:function(t){this._buttonLike.classList.toggle("element__button-like_active"),this._likeCounter.textContent=t}},{key:"handleDeleteCard",value:function(){this._cardElement.remove(),this._cardElement=null}},{key:"_handleLikeCardClick",value:function(){this._handleAddLikeTracker(this._checkLikeStatus())}},{key:"_setEventListeners",value:function(){var t=this;this._buttonLike.addEventListener("click",(function(){t._handleLikeCardClick()})),this._buttonDelete.addEventListener("click",(function(){t._handleDeleteClick()})),this._cardImage.addEventListener("click",(function(){t._handleCardClick()}))}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}var h={formSelector:".popup__content",inputSelector:".popup__field",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__field_type_error",errorClass:"popup__input-error"},d=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=n,this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._buttonSubmit=this._formElement.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t){this._errorElement=this._formElement.querySelector(".".concat(t.id,"-error")),t.classList.add(this._inputErrorClass),this._errorElement.textContent=t.validationMessage}},{key:"_hideInputError",value:function(t){this._errorElement=this._formElement.querySelector(".".concat(t.id,"-error")),t.classList.remove(this._inputErrorClass),this._errorElement.textContent=""}},{key:"_toggleButtonState",value:function(){this._isFormValid=this._formElement.checkValidity(),this._buttonSubmit.disabled=!this._isFormValid,this._buttonSubmit.classList.toggle(this._inactiveButtonClass,!this._isFormValid)}},{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"disableValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_setEventListeners",value:function(){var t=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}var v=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.append(t)}},{key:"prependItem",value:function(t){this._container.prepend(t)}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,g(r.key),r)}}function g(t){var e=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===_(e)?e:String(e)}var k=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=g(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(e),this._popupBtnClose=this._popup.querySelector(".popup__button-close")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popupBtnClose.addEventListener("click",(function(){t.close()})),this._popup.addEventListener("click",(function(e){e.target.classList.contains("popup_opened")&&t.close()}))}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(o){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupCardImage=e._popup.querySelector(".popup__card-image"),e._popupCardTitle=e._popup.querySelector(".popup__card-title"),e}return e=u,(n=[{key:"open",value:function(t){j(O(u.prototype),"open",this).call(this),this._popupCardImage.src=t.link,this._popupCardImage.alt=t.name,this._popupCardTitle.textContent=t.name}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},I.apply(this,arguments)}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(r);if(o){var n=q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===L(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=e,n._form=n._popup.querySelector(".popup__content"),n._inputList=Array.from(n._popup.querySelectorAll(".popup__field")),n._buttonSubmit=n._popup.querySelector(".popup__button-save"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"close",value:function(){I(q(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var t=this;I(q(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}},{key:"renderLoading",value:function(t){this._buttonSubmit.textContent=t}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}var B=function(){function t(e){var n=e.nameSelector,r=e.jobSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._job=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(t){this._name.textContent=t.name,this._job.textContent=t.about,this._avatar.src=t.avatar,this._id=t._id}},{key:"getUserId",value:function(){return this._id}}],n&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}var z=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._token=e.headers.authorization}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"getUserProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"updateUserProfile",value:function(t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.job})}).then(this._checkResponse)}},{key:"updateUserAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t.link})}).then(this._checkResponse)}},{key:"addNewCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,link:t.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"addLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"removeLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==F(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===F(o)?o:String(o)),r)}var o}function J(){return J="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=H(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},J.apply(this,arguments)}function G(t,e){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},G(t,e)}function H(t){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},H(t)}var M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&G(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=H(r);if(o){var n=H(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===F(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._form=e._popup.querySelector(".popup__content"),e}return e=u,(n=[{key:"setSubmitActionForm",value:function(t){this._handleFormSubmit=t}},{key:"setEventListeners",value:function(){var t=this;J(H(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit()}))}}])&&N(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var K=new B({nameSelector:".profile__info-title",jobSelector:".profile__info-subtitle",avatarSelector:".profile__avatar"}),Q=new M(".popup-delete-card");Q.setEventListeners();var W=new P(".popup-card");W.setEventListeners();var X=function(t){var e=new f({data:t,userId:K.getUserId(),handleCardClick:function(){W.open(t)},handleDeleteClick:function(){Q.open(),Q.setSubmitActionForm((function(){Z.deleteCard(e.getId()).then((function(){e.handleDeleteCard(),Q.close()})).catch((function(t){return console.log("Ошибка ".concat(t))}))}))},handleAddLikeTracker:function(t){t?Z.removeLike(e.getId()).then((function(t){e.handleLikeCard(t.likes.length)})).catch((function(t){console.log("Ошибка ".concat(t," при попытке удаления лайка"))})):Z.addLike(e.getId()).then((function(t){e.handleLikeCard(t.likes.length)})).catch((function(t){console.log("Ошибка ".concat(t," при попытке поставить лайк"))}))}},"#cards-template");return e.generateCard()},Y=new v({renderer:function(t){Y.addItem(X(t))}},".elements"),Z=new z({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"e03190d5-8e78-4019-a57e-e50dca931db9","Content-Type":"application/json"}});Promise.all([Z.getUserProfile(),Z.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return $(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];K.setUserInfo(o),Y.renderItems(i)})).catch((function(t){return console.log("Error:".concat(t))}));var tt=new U(".popup_edit-form",(function(t){tt.renderLoading("Сохранение..."),Z.updateUserProfile(t).then((function(t){console.log(t),K.setUserInfo(t),tt.close()})).catch((function(t){console.log(t)})).finally((function(){tt.renderLoading("Сохранить")}))}));tt.setEventListeners(),t.addEventListener("click",(function(){var t=K.getUserInfo(),e=t.name,n=t.job;r.value=e,o.value=n,rt.disableValidation(),tt.open()}));var et=new U(".popup_add-form",(function(t){et.renderLoading("Создание..."),Z.addNewCard(t).then((function(t){Y.prependItem(X(t)),et.close()})).catch((function(t){return console.log("Ошибка ".concat(t," при попытке создания карточки"))})).finally((function(){et.renderLoading("Создать")}))}));et.setEventListeners(),i.addEventListener("click",(function(){ot.disableValidation(),et.open()}));var nt=new U(".popup_update-avatar-form",(function(t){nt.renderLoading("Сохранение..."),Z.updateUserAvatar(t).then((function(t){c.src=t.avatar,nt.close()})).catch((function(t){console.log(t)})).finally((function(){nt.renderLoading("Сохранить")}))}));nt.setEventListeners(),a.addEventListener("click",(function(){nt.open(),it.disableValidation()}));var rt=new d(h,e),ot=new d(h,u),it=new d(h,n);rt.enableValidation(),ot.enableValidation(),it.enableValidation()})();