'use strick';

import './index.html';
import './scss/main.scss'; // если собираем не через ./src/scss/main.scss

const debounce = require('lodash.debounce'); //npm i --save lodash.debounce
console.dir(debounce);

const { defaults } = require('@pnotify/core'); //https://github.com/sciactive/pnotify#styles
defaults.icons = 'material';

console.dir(defaults);
