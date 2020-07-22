const { myPnotify } = require('./MyPnotyf');
const { obSrvererImg } = require('./obServers/obServerImg');

class FindImg {
	constructor({ body, form, gallery, options }) {
		this._options = options;
		this._API_KAY = this._options.key;
		this._per_page = this._options.amountElements;
		this._counter = 0;
		this._name = 'all';
		this._body = body;
		this._form = form;
		this._gallery = gallery;
		this._templatesCardImg = this._options.cardImg;
		this._templatesListCard = this._options.listCard;
		this.formSubmitHandler(this._name);
	}
	// Функция  сборки URL
	creatingURL(e) {
		return `${`https://pixabay.com/api/`}${`?image_type=photo`}${`&orientation=horizontal`}&q=${e}&page=${this
			._counter}&per_page=${this._per_page}&key=${this._API_KAY}`;
	}

	// Функция  делает  запрос данных с сервера
	async request(e) {
		return await fetch(this.creatingURL(e))
			.then((response) => response.json())
			.then((value) => {
				if (value.total === 0) {
					throw myPnotify(0);
					return;
				}
				return value.hits;
			})
			.catch((error) => {
				myPnotify(0);
			});
	}
	// // функция обрабатывающая прослушиваемый элемент в вода и собирает шаблон и выводит на страницу его
	formSubmitHandler(e) {
		if (e !== this._name) {
			e.preventDefault();
			e.stopPropagation();
			this.searchQuery = e.target.form.query.value;
		}
		this.resetPage();
		this.request(this._name).then((value) => {
			if (value === undefined) {
				myPnotify(0);
				return;
			}
			if (value.length === 0) {
				this.deletedElements();
				myPnotify(0);
				return;
			}
			if (this._body.children.listCard !== undefined) {
				this.deletedElements();
				this.addListOnElement(this.imgPush(value));
				this.addObServer();
				return;
			}
			if (value !== undefined) {
				this.addElementOnPage(this._body, this.listPush(value));
				return;
			}
		});
	}
	// Добавляет шаблон в внутрь элемента
	addElementOnPage(elem, items) {
		elem.insertAdjacentHTML('beforeend', items);
		obSrvererImg.obsImg('.card__img');
		this.addObServer();
	}

	//добавит лишки
	addListOnElement(items) {
		this._gallery().insertAdjacentHTML('beforeend', items);
		obSrvererImg.obsImg('.card__img');
	}
	//Deleted element
	deletedElements(e) {
		this._gallery().innerHTML = null;
		if (e === 1) {
			this._form().query.value = null;
		}
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
	// изменяем номер странице запроса
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
	// Делаем запрос на сервер and adding new cards to the gallery
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
	// при прокрутке добавляет новые файлы
	addObServer() {
		let observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						this.addElem();
					}
					if (entry.rootBounds === null) {
						return;
					}
					observer.unobserve(entry.target); // останавливаем слежку за
					observer.observe(this._gallery().lastElementChild); // вешаем новую прослушку на последний элемент
				});
			},
			{
				rootMargin: '150px',
				threshold: 1
			}
		);
		observer.observe(this._gallery().lastElementChild); // следим за последний элементом
	}
}

module.exports = {
	FindImg
};
