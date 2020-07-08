'use strick';

import './index.html';
import './scss/main.scss'; // если собираем не через ./src/scss/main.scss
import cardCountry from './templates/card_country.hbs';
import listCountry from './templates/list_country.hbs';
import templateError from './templates/error.hbs';
//npm i --save lodash.debounce
const input = document.querySelector('#js-name_country');
const card = document.querySelector('.card');

//----------------------pnotify
import { success, error, defaults, Stack } from '@pnotify/core';
defaults.width = '300px';

//-------------------- word lodash
const _ = require('../node_modules/lodash'); //подсоединили библиотеку lodash

// const text = _.debounce(() => {
// 	console.log(66);
// }, 5556);
// input.addEventListener('click', (e) => text());
// -----------------
//https://github.com/sciactive/pnotify#styles
//https://codesandbox.io/s/pnotify-5-in-vanilla-es6-x4ipu?file=/src/index.js
//https://sciactive.com/pnotify/
//https://www.jqueryscript.net/other/JS-Notification-Plugin-For-Bootstrap-jQuery-UI-Pines-Notify.html
// --------------------

input.addEventListener('input', e => dataCountry(e));

const dataCountry = _.debounce(function (e) {
  //e.preventDefault();
  e.stopPropagation();
  const eve = e.target;

  fetch(`https://restcountries.eu/rest/v2/name/${eve.value}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
    .then(response => {
      if (eve.nextSibling.nextElementSibling) {
        eve.nextSibling.nextElementSibling.remove();
      }
      if (!response.ok) {
        myPnotify(0);
        return;
      }
      return response.json();
    })
    .then(data => {
      if (data.length > 1) {
        addItems(assemblyLi(data));
        return;
      }

      addItems(assemblyCountry(data));
    })
    .catch(() => {
      addItems(templateError());
    });
}, 500);

const addItems = item => {
  card.insertAdjacentHTML('beforeend', item);
};

const assemblyCountry = data => {
  myPnotify();
  return data.map(data => createTemplateCountry(data));
};

const assemblyLi = data => {
  myPnotify();
  return createTemplateLi({ name: data.map(({ name }) => name) });
};

const createTemplateCountry = items => {
  return cardCountry(items);
};
const createTemplateLi = items => {
  return listCountry(items);
};

const myPnotify = a => {
  const myStackSuccess = new Stack({
    dir1: 'down',
    dir2: 'right',
    firstpos1: 25,
    firstpos2: 125,
  });
  const myStackError = new Stack({
    dir1: 'down',
    dir2: 'left',
    firstpos1: 25,
    firstpos2: 125,
  });
  if (a === 0) {
    return error({
      title: 'Не найдено',
      text: 'Что-то пошло не так и страна не найдена',
      delay: 1000,
      stack: myStackError,
    });
  }
  return success({
    title: 'Найдено',
    text: 'Найдена одна страна по вашему запросу  ',
    delay: 1000,
    stack: myStackSuccess,
  });
};
