'use strict';
import qs from './refs.js';
import menuJSON from './menu.json';
import menuTemplate from '../templates/menu.hbs';

menuJSON.forEach((a) => qs.menu.insertAdjacentHTML('beforeend', menuTemplate(a)));
