'use strict';
const nav = document.querySelector('.nav');
const onEntry = (entries) => {
	entries.forEach((elem) => {
		const sectionId = elem.target.getAttribute('id');
		const navLink = nav.querySelector(`a[href="#${sectionId}"]`);
		elem.target.style.margin = '30px auto';
		elem.target.style.maxWidth = '71%';
		elem.target.style.transition = 'all 500ms linear 10ms';
		elem.target.style.fontSize = '1em';

		if (!elem.isIntersecting) {
			elem.target.style.backgroundColor = 'red';

			navLink.style.backgroundColor = 'red';
		}

		if (elem.isIntersecting) {
			elem.target.style.backgroundColor = 'chartreuse';
			navLink.style.backgroundColor = 'chartreuse';
		}
	});
};
const options = {
	//0-1 размер какой должне войти элемент для того чтобы его отправить в target
	threshold: 0.7,
	rootMargin: '0px 0px 0px 0px'
};
// new IntersectionObserver - функция следит за всеми указаными элементами
//и когда они в ходят в на странице в пределы видимсти возвращает target на тот элемент закоторым надо было следить
// первый параметр передаёться callback функция
// вторым пораметром
//https://developer.mozilla.org/ru/docs/Web/API/IntersectionObserver
const observer = new IntersectionObserver(onEntry, options);
const sections = document.querySelectorAll('section');

// Через цикл предаём observer все элементы за которыми надо следить
sections.forEach((elem) => {
	observer.observe(elem);
});
// observer для картинок
const lazyLoad = (target) => {
	const imgOptions = {
		rootMargin: '120px',
		threshold: 0.01
	};
	// const imgOnEntry = (entries) => {
	// 	entries.forEach((elem) => {});
	// };
	const imgObserver = new IntersectionObserver((entries, obserevr) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const img = entry.target;
				const rrsrc = img.dataset.img;
				img.setAttribute('src', rrsrc);
				console.log(img);
				obserevr.disconnect();
			}
		});
	}, imgOptions);
	imgObserver.observe(target);
};
const images = document.querySelectorAll('.box-section section img');
images.forEach((image) => {
	lazyLoad(image);
});
