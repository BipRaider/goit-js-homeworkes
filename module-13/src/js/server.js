// //--plugins
// import { success, error, defaults, Stack } from '@pnotify/core';
// const myPnotyf = require('./MyPnotyf');
// const _ = require('lodash');
// // _.debounce(() => {}, 500);

class FindImg {
	constructor({ body, form, gallery, options }) {
		this._imageType = `?image_type=photo`;
		this._orientation = `&orientation=horizontal`;
		this._options = options;
		this._API_KAY = `&key=${this._options.key}`;
		this._counter = this._options.page;
		this._per_page = `&per_page=${this._options.amountElements}`;

		this._form = form;
		this._body = body;
		this._gallery = gallery;
		this._templatesCardImg = this._options.cardImg;
		this._templatesListCard = this._options.listCard;

		//listener
		this.listenerElements();
	}
	// Функция  сборки URL
	creatingURL(e) {
		this.beseURL = `https://pixabay.com/api/`;
		return `${this.beseURL}${this._imageType}${this._orientation}${e}&page=${this._counter}${this._per_page}${this
			._API_KAY}`;
	}

	// Функция  делает  запрос данных с сервера
	async request(e) {
		return await fetch(this.creatingURL(e)).then((response) => response.json()).then((value) => {
			return value.hits;
		});
	}

	// функция обрабатывающая прослушиваемый элемент в вода и собирает шаблон и выводит на страницу его
	async formSubmitHandler(e) {
		e.preventDefault();

		this.target = e.currentTarget.elements.query.value;
		this._name = `&q=${this.target}`;

		await this.request(this._name).then((value) => {
			this.counterPage();
			if (this._counter > 2) {
				this.addListOnElement(this.imgPush(value));
				return;
			}

			this.addElementOnPage(this._form, this.listPush(value));
		});
	}
	// Добавляет шаблон в внутрь элемента
	addElementOnPage(elem, items) {
		elem.insertAdjacentHTML('beforeend', items);
	}
	//добавит лишки
	addListOnElement(items) {
		this._form.children.listCard.insertAdjacentHTML('beforeend', items);
	}
	//Deleted element
	deletedElements() {
		this._form.children.listCard.innerHTML = '';
	}
	// создаёт шаблон карточки  с  нужными данными
	imgPush(items) {
		return this._templatesCardImg(items);
	}
	// создаём  шаблон с данными что выводятся на экран

	listPush(items) {
		return this._templatesListCard(items);
	}

	// Увеличивает счетчик страниц
	counterPage() {
		this._counter += 1;
	}
	//Функция слушает события на элементах
	listenerElements() {
		// this._body.children.queryForm.addEventListener('input', (e) => this.formSubmitHandler(e));
		this._form.addEventListener('input', (e) => this.formSubmitHandler(e));
	}
}

module.exports = {
	FindImg
};
