'use strict';

// Для добавления стилей, используй CSS-классы valid и invalid.
//====================Start================
// Нашли элемент
const inputEvent = document.querySelector('#validation-input');
//====================test 1 ================
// Повесил прослушку
// inputEvent.addEventListener('keyup', (keyup) => even(keyup));

// function even(keyup) {
// 	if (keyup.target.dataset.length <= keyup.target.value.length) {
// 		return (keyup.target.style.backgroundColor = 'green');
// 	}
// 	keyup.target.style.backgroundColor = 'red';
// }
// =======================test 2 ================
// Повесил прослушку
inputEvent.addEventListener('keyup', (keyup) => even1(keyup, inputEvent));

function even1(keyup, elem) {
	elem.classList.add('invalid');
	if (keyup.target.dataset.length <= keyup.target.value.length) {
		return elem.classList.replace('invalid', 'valid');
	}
}
