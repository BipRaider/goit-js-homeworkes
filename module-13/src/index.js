'use strick';
//https://github.com/typicode/json-server
//https://www.npmjs.com/package/json-server
import './index.html';
import './scss/main.scss';
//--plugins
import { success, error, defaults, Stack } from '@pnotify/core';
const myPnotyf = require('./js/MyPnotyf');
const _ = require('../node_modules/lodash');
// _.debounce(() => {}, 500);
//work files template
import listCard from './templates/list_country.hbs';
import cardImg from './templates/cardImg.hbs';
// work files js
import refs from './js/refs.js';
const elements = require('./js/addElemenHTMLt');
const { FindImg } = require('./js/server.js');
// ------------------start job---------------
refs.options = {
	key: `17407415-67eb64dc8eab8b8e81d6a0407`,
	page: 1,
	amountElements: 12,
	cardImg,
	listCard
};
const t = new FindImg(refs);

refs.body.insertAdjacentHTML('afterbegin', elements.form);
refs.body.children.queryForm.addEventListener('input', (e) => _.debounce(t.formSubmitHandler(e), 500));
