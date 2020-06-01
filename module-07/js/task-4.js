'use strict';
console.log('=============task 4 start===============');
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
//{
/* <div id="counter">
	<button type="button" data-action="decrement">
		-1
	</button>
	<span id="value">0</span>
	<button type="button" data-action="increment">
		+1
	</button>
</div>; */
//}
// const counterBox = document.querySelector('#counter');
const counterValue = document.querySelector('#value');
const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');

const increment1 = (counterValue) => (counterValue.textContent = Number.parseInt(counterValue.textContent) + 1);
const decrement1 = (counterValue) => (counterValue.textContent = Number.parseInt(counterValue.textContent) - 1);

increment.addEventListener('click', () => increment1(counterValue));
decrement.addEventListener('click', () => decrement1(counterValue));

// ===========test 2===============
// https://learn.javascript.ru/event-delegation
//https://developer.mozilla.org/ru/docs/Web/API/Element/closest
//https://developer.mozilla.org/ru/docs/Web/API/Event/target
const increment2 = (document.querySelector('button[data-action="increment1"]').onclick = () => {
	let cnt = document.querySelector('#value1');
	cnt.innerText = parseInt(cnt.innerText, 10) + 1;
});

const decrement2 = (document.querySelector('button[data-action="decrement1"]').onclick = () => {
	let cnt = document.querySelector('#value1');
	cnt.innerText = parseInt(cnt.innerText, 10) - 1;
});
//https://ru.stackoverflow.com/questions/630324/%D0%A1%D1%87%D1%91%D1%82%D1%87%D0%B8%D0%BA-%D0%BA%D0%BB%D0%B8%D0%BA%D0%BE%D0%B2-%D0%B4%D0%BB%D1%8F-%D1%80%D0%B0%D0%B7%D0%BD%D1%8B%D1%85-%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE%D0%B2-%D1%87%D0%B5%D1%80%D0%B5%D0%B7-%D0%B4%D0%B5%D0%BB%D0%B5%D0%B3%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-js
///=================
