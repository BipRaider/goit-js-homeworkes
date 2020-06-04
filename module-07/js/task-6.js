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
	const targData = keyup.target.dataset.length;
	const targValue = keyup.target.value.length;

	if (targData >= targValue) {
		elem.classList.remove('valid');
		return elem.classList.add('invalid');
	}
	if (targData <= targValue) {
		elem.classList.remove('invalid');
		return elem.classList.add('valid');
	}
}

// elem.classList.contains(cls) - возвращает true или false, в зависимости от того, есть ли у элемента класс cls
// elem.classList.add(cls) - добавляет класс cls в список классов элемента
// elem.classList.remove(cls) - удаляет класс cls из списка классов элемента
// elem.classList.replace(oldClass, newClass) - заменяет существующий класс на указанный
// elem.classList.toggle(cls) - если класса cls нет, добавляет его, если есть, удаляет
