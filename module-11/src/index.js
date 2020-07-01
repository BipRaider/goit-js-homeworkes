'use strick';

import './index.html';
import './scss/main.scss';
import Prom from './js/promise.js';
import clockTimer from './js/timerClock';
import PlaginDownTime from './js/PlaginDownTime';
import PlaginColorsTimer from './js/ColorsTimer';

const colorT = {
  colors: ['#FFF333', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'],
  elem: document.body,
};

const refs = {
  btnStart: document.querySelector('button[data-action="start-timer"]'),
  btnStop: document.querySelector('button[data-action="stop-timer"]'),
  clock: document.querySelector('.js-clockface'),
  downData: document.querySelector('.js-downData'),
  spanDD: document.querySelector('span[data-value="days"]'),
  spanDH: document.querySelector('span[data-value="hours"]'),
  spanDM: document.querySelector('span[data-value="mins"]'),
  spanDS: document.querySelector('span[data-value="secs"]'),
  fallTime: '07, 17, 2020 ',
  // fallTime: '2017, 6, 14, 7, 40, 0, 1'
};

new clockTimer(refs);
new PlaginDownTime(refs);
new PlaginColorsTimer(colorT, refs);
