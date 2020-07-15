class FindImg {
	constructor(
		{
			body,
			form,
			gallery,
			key = `17407415-67eb64dc8eab8b8e81d6a0407`,
			name = 'cat',
			page = 1,
			amountElements = 12
		},
		cardImg,
		listCard
	) {
		this._imageType = `?image_type=photo`;
		this._orientation = `&orientation=horizontal`;
		this._API_KAY = `&key=${key}`;
		// this._name = `&q=${name}`;
		this._counter = page;
		this._page = `&page=${this._counter}`;
		this._per_page = `&per_page=${amountElements}`;

		this._form = form;
		this._body = body;
		this._gallery = gallery;
		this._templatesCardImg = cardImg;
		this._templatesListCard = listCard;
		//listener
		this.listenerElements();
	}

	async request(e) {
		this.beseURL = `https://pixabay.com/api/`;
		this.requestParams = `${this._imageType}${this._orientation}${e}${this._page}${this._per_page}${this._API_KAY}`;

		const img = await fetch(this.beseURL + this.requestParams).then((response) => response.json()).then((value) => {
			this.counterPage();
			return value.hits;
		});
		return img;
	}

	formSubmitHandler(e) {
		e.preventDefault();
		this.target = e.currentTarget.elements.query.value;
		this._name = `&q=${this.target}`;

		this.request(this._name).then((value) => {
			this.addElementOnPage(this._form, this.listPush(value));
		});
	}
	addElementOnPage(elem, items) {
		elem.insertAdjacentHTML('beforeend', items);
	}
	imgPush(items) {
		return items.map((value) => this._templatesCardImg(value));
	}

	listPush(items) {
		return this._templatesListCard(items);
	}

	counterPage() {
		this._counter += 1;
	}
	listenerElements() {
		this._body.children.queryForm.addEventListener('input', (e) => this.formSubmitHandler(e));
		this._form.addEventListener('input', (e) => this.formSubmitHandler(e));
	}
}

module.exports = {
	FindImg
};
