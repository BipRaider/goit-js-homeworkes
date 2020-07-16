export default {
	imageType: `?image_type=photo`,
	torientation: `&orientation=horizontal`,
	options: {},
	API_KAY: `&key=${this._options.key}`,
	counter: this._options.page,
	per_page: `&per_page=${this._options.amountElements}`,
	name: '',

	// Функция  сборки URL
	creatingURL(e) {
		this.beseURL = `https://pixabay.com/api/`;
		return `${this.beseURL}${this._imageType}${this._orientation}&q=${e}&page=${this._counter}${this
			._per_page}${this._API_KAY}`;
	},

	// Функция  делает  запрос данных с сервера
	async request(e) {
		return await fetch(this.creatingURL(e)).then((response) => response.json()).then((value) => {
			return value.hits;
		});
	},
	// Увеличивает счетчик страниц
	counterPage() {
		this.counter += 1;
	},
	//
	get searchQuery() {
		return this.name;
	},
	set searchQuery(str) {
		this.name = str;
	}
};
