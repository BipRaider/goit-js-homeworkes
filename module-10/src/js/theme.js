'use strick';
import qs from './QSElements.js';
const theme = require('./themes/body.them.js');

if (localStorage.getItem('rememberLS') === null) {
  let rememberLS = {
    body: 'light-theme',
  };
  localStorage.setItem('rememberLS', JSON.stringify(rememberLS));
}

const remember = JSON.parse(localStorage.getItem('rememberLS'));

qs.body.classList.add(remember.body);
qs.switchInput.checked = remember.checkInput;

// const loc = JSON.parse(localStorage.getItem('checkInput'));
// qs.switchInput.checked = loc;
// qs.body.classList.add(localStorage.getItem('body'));
qs.switchInput.addEventListener('click', e => theme.switchTheme(e, qs.body));

// --------------test
