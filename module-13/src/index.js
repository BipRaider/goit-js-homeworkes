'use strick';
//https://github.com/typicode/json-server
//https://www.npmjs.com/package/json-server
import './index.html';
import './scss/main.scss';
//--plugins
import { success, error, defaults, Stack } from '@pnotify/core';
const basicLightbox = require('basiclightbox');
const _ = require('../node_modules/lodash'); // _.debounce(() => {}, 500);
//----------------не через класс-------------
import MyNewFetch from './js/servers/fetchNew';
import MyQueryFetch from './js/servers/fetchQuery';
//work files template
import listCard from './templates/list_country.hbs';
import cardImg from './templates/cardImg.hbs';
// work files js
import refs from './js/refs.js';
const elements = require('./js/addElemenHTMLt');
const { FindImg } = require('./js/server.js');
// ------------------start job---------------

// настройки scrolls
refs.top.addEventListener('click', (e) =>
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
);
refs.down.addEventListener('click', (e) => window.scrollTo(0, window.pageYOffset + window.innerHeight));
//---------------добавил элемент на страницу----------------
refs.body.insertAdjacentHTML('afterbegin', elements.form);
//----------------------------
//-----------------------Работа через класс----------------------
refs.options = {
	key: `17407415-67eb64dc8eab8b8e81d6a0407`,
	amountElements: 12,
	cardImg,
	listCard
};

const t = new FindImg(refs);

refs.body.children.queryForm.addEventListener('input', _.debounce((e) => t.formSubmitHandler(e), 1000));
refs.but.addEventListener('click', (e) => t.deletedElements());

// ------------------
//https://learn.javascript.ru/basic-dom-node-properties
EventCardImg();

function EventCardImg() {
	refs.body.addEventListener('click', (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.target.className === 'card__img') {
			const fullImgSrc = e.target.parentElement.href;
			const imgSrc = e.target;
			imgSrc.src = fullImgSrc;
			instanceElement(imgSrc.outerHTML, imgSrc);
		}
		if (e.target.className === 'basicLightbox basicLightbox--img') {
		}
	});
}
function instanceElement(params, elem) {
	const instance = basicLightbox.create(`${params}`);
	elem.src = elem.dataset.img;
	instance.show();
}

// document.body.style.overflow = 'hidden'; // запрет на прокрутку
//https://learn.javascript.ru/metrics-window#page-scroll
