'use strick';
//https://github.com/typicode/json-server
//https://www.npmjs.com/package/json-server
import './index.html';
import './scss/main.scss';
//--plugins
import { success, error, defaults, Stack } from '@pnotify/core';
const _ = require('../node_modules/lodash');
//work files template
import listCard from './templates/list_country.hbs';
import cardImg from './templates/cardImg.hbs';
// work files js
import refs from './js/refs.js';
const elements = require('./js/addElemenHTMLt');
const { FindImg } = require('./js/server.js');
// ------------------start job---------------

refs.body.insertAdjacentHTML('afterbegin', elements.form);
// new FindImg(API_KAY);

const addImg = new FindImg(refs, cardImg, listCard);
