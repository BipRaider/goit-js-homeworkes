//и когда они в ходят в на странице в пределы видимсти возвращает target на тот элемент закоторым надо было следить
// первый параметр передаёться callback функция
// вторым пораметром
//https://developer.mozilla.org/ru/docs/Web/API/IntersectionObserver
//https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API
//https://habr.com/ru/post/494670/

const MyObs = {
	imgOptions: {
		rootMargin: '50px', // сдвиг области видимости элемента
		threshold: 0.4 // на сколько должен войти элемент в экране 0-1
	},

	obsImg(target) {
		const images = document.querySelectorAll(target).forEach((elem) => this.imgLoad(elem));
	},
	elemEntry(entries, obs) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				this.img = entry.target;
				this.src = this.img.dataset.img;
				this.img.setAttribute('src', this.src);
				obs.unobserve(this.img); // снимаем слежку
			}
		});
	},

	imgLoad(elem) {
		const imgObserver = new IntersectionObserver(this.elemEntry, this.imgOptions);
		imgObserver.observe(elem);
	}
};

module.exports = {
	MyObs
};
