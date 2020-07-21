// //--plugins
const _ = require('../../node_modules/lodash'); // _.debounce(() => {}, 500);
const { myPnotify } = require('./MyPnotyf');
const { MyObs } = require('./servers/observer');

class FindImg {
	constructor({ body, gallery, options }) {
		this._imageType = `?image_type=photo`;
		this._orientation = `&orientation=horizontal`;
		this._options = options;
		this._API_KAY = `&key=${this._options.key}`;
		this._counter = 0;
		this._per_page = `&per_page=${this._options.amountElements}`;
		this._name = '';

		this._body = body;
		this._gallery = gallery;

		this._templatesCardImg = this._options.cardImg;
		this._templatesListCard = this._options.listCard;
	}
	// Функция  сборки URL
	creatingURL(e) {
		this.beseURL = `https://pixabay.com/api/`;
		return `${this.beseURL}${this._imageType}${this._orientation}&q=${e}&page=${this._counter}${this
			._per_page}${this._API_KAY}`;
	}

	// Функция  делает  запрос данных с сервера
	async request(e) {
		return await fetch(this.creatingURL(e))
			.then((response) => response.json())
			.then((value) => {
				return value.hits;
			})
			.catch((error) => {
				myPnotify(0);
			});
	}

	// // функция обрабатывающая прослушиваемый элемент в вода и собирает шаблон и выводит на страницу его
	formSubmitHandler(e) {
		e.preventDefault();
		e.stopPropagation();
		this.searchQuery = e.target.form.query.value;
		this.resetPage();
		this.request(this._name).then((value) => {
			if (value.length === 0) {
				this.deletedElements();
				myPnotify(0);
				return;
			}
			myPnotify();
			if (this._body.children.listCard !== undefined) {
				this.deletedElements();
				this.addListOnElement(this.imgPush(value));
				this.addObServer();
				return;
			}
			this.addElementOnPage(this._body, this.listPush(value));
		});
	}
	// Добавляет шаблон в внутрь элемента
	addElementOnPage(elem, items) {
		elem.insertAdjacentHTML('beforeend', items);
		MyObs.obsImg('.card__img');
		this.addObServer();
	}
	// Добавление Элемента по клику на кнопку
	addElem() {
		this.counterPage();
		if (this._name === '') {
			myPnotify(0);
			return;
		}

		this.request(this._name).then((value) => {
			this.addListOnElement(this.imgPush(value));
		});
	}

	//добавит лишки
	addListOnElement(items) {
		this._body.children.listCard.insertAdjacentHTML('beforeend', items);
		MyObs.obsImg('.card__img');
	}
	//Deleted element
	deletedElements() {
		this._body.children.listCard.innerHTML = '';
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
	resetPage() {
		this._counter = 1;
	}
	//
	get searchQuery() {
		return this._name;
	}
	set searchQuery(str) {
		this._name = str;
	}

	addObServer() {
		let observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						this.addElem();
					}
					observer.unobserve(entry.target); // останавливаем слежку за элементом
					observer.observe(this._body.children.listCard.lastElementChild); // вешаем новую прослушку на последний элемент
				});
			},
			{
				rootMargin: '150px',
				threshold: 1
			}
		);
		observer.observe(this._body.children.listCard.lastElementChild); // следим за последний элементом
	}
}

module.exports = {
	FindImg
};
