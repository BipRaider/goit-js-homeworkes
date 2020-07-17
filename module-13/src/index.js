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
// const instance = basicLightbox.create(`<div class="modal"></div>`);
// instance.show();

// настройки scrolls
refs.top.addEventListener('click', e =>
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  }),
);
refs.down.addEventListener('click', e =>
  window.scrollTo(0, window.pageYOffset + window.innerHeight),
);
//---------------добавил элемент на страницу----------------
refs.body.insertAdjacentHTML('afterbegin', elements.form);
//----------------------------
//-----------------------Работа через класс----------------------
refs.options = {
  key: `17407415-67eb64dc8eab8b8e81d6a0407`,
  amountElements: 12,
  cardImg,
  listCard,
};

const t = new FindImg(refs);

refs.body.children.queryForm.addEventListener(
  'input',
  _.debounce(e => t.formSubmitHandler(e), 1000),
);
refs.but.addEventListener('click', e => t.addElem());

///

//===========================Переделка====================================
// MyNewFetch.constructor(refs);

// console.dir(MyNewFetch);
// //==============

// console.dir(MyQueryFetch);

// const formSubmitHandler = e => {
//   e.preventDefault();
//   e.stopPropagation();

//   const name = e.target.form.query.value;
//   t.searchQuery = name;
//   t.request(name).then(value => {
//     t.counterPage();
//     if (t._counter > 2) {
//       t.addListOnElement(t.imgPush(value));
//       return;
//     }
//     t.addElementOnPage(refs.body, t.listPush(value));
//   });
// };

// document.body.style.overflow = 'hidden'; // запрет на прокрутку
//https://learn.javascript.ru/metrics-window#page-scroll
