export default {
  counter: 1,
  name: '',

  // Функция  сборки URL
  creatingURL(e, options) {
    const option = {
      beseURL: `https://pixabay.com/api/`,
      imageType: `?image_type=photo`,
      orientation: `&orientation=horizontal`,
      key: `17407415-67eb64dc8eab8b8e81d6a0407`,
      amountElements: 12,
    };

    return `${option.beseURL}${option.imageType}${option.orientation}&q=${e}&page=${this.counter}&per_page=${option.per_page}&key=${option.key}`;
  },

  // Функция  делает  запрос данных с сервера
  async request(e) {
    return await fetch(this.creatingURL(e))
      .then(response => response.json())
      .then(value => {
        return value.hits;
      });
  },
  // Увеличивает счетчик страниц
  counterPage() {
    this.counter += 1;
  },
  //Переход к первой странице
  resetPage() {
    this.counter = 1;
  },
  //
  get searchQuery() {
    return this.name;
  },
  set searchQuery(str) {
    this.name = str;
  },
};
