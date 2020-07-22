'use strick';
import './index.html';
import './scss/main.scss';
import refs from './js/refs.js';
//--------- add plugins
import { success, error, Stack } from '@pnotify/core';
const basicLightbox = require('basiclightbox'); // НЕ понял почему не могу подключить в другом файле в папке src
const _ = require('../node_modules/lodash');
// work files js
const elements = require('./js/addElemenHTMLt');
const { FindImg } = require('./js/server.js');
//work files template
import listCard from './templates/list_country.hbs';
import cardImg from './templates/cardImg.hbs';

// настройки scrolls button

refs.top.addEventListener('click', (e) =>
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
);
refs.down.addEventListener('click', (e) => window.scrollTo(0, window.pageYOffset + window.innerHeight));

//---------------добавил element form  на страницу----------------

refs.body.insertAdjacentHTML('afterbegin', elements.form);

//----------------Запуск функций поиска картинок----------------------
// настройки  for plugin FindImg
refs.options = {
	key: `17407415-67eb64dc8eab8b8e81d6a0407`,
	amountElements: 12,
	cardImg,
	listCard
};
const t = new FindImg(refs);

refs.form().addEventListener('input', _.debounce((e) => t.formSubmitHandler(e), 1000));
refs.but.addEventListener('click', (e) => t.deletedElements(1));

//---------------Пок клику на картинку открывает на всё окно картинку -------
refs.body.addEventListener('click', (e) => fullWindowImg(e));

function fullWindowImg(e) {
	e.preventDefault();
	e.stopPropagation();
	if (e.target.className === 'card__img') {
		const fullImgSrc = e.target.parentElement.href;
		const imgSrc = e.target;
		imgSrc.src = fullImgSrc;
		instanceElement(imgSrc.outerHTML, imgSrc);
	}
}
const instanceElement = (params, elem) => {
	const instance = basicLightbox.create(`${params}`);
	elem.src = elem.dataset.img;
	instance.show();
};
//----------------полезная информация --------
// document.body.style.overflow = 'hidden'; // запрет на прокрутку
//https://learn.javascript.ru/metrics-window#page-scroll
//https://learn.javascript.ru/basic-dom-node-properties
//https://github.com/typicode/json-server
//https://www.npmjs.com/package/json-server
