'use strict';
// Напиши скрипт создания и очистки коллекции элементов.
//  Пользователь вводит количество элементов в input и нажимает кнопку
//   Создать,после чего рендерится коллекция.
//    При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount),
//  которая принимает 1 параметр amount - число.
//  Функция создает столько div,
//  сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

//{
/* <div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div> */
//}
// ==========  Все найденные элементе в DOM ==========
const controls = document.querySelector('#controls');
const input = controls.querySelector('input[type="number"]');
const buttRender = document.querySelector('button[data-action="render"]');
const buttDestroy = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('#boxes');
//============
function creadDiv(elem, addSize = 0) {
	const div = document.createElement('div');
	let sizeDiv = `${30 + addSize}px`;
	let color = `hsl(${30 + addSize}, 50%, 50%)`;
	console.log(color);
	div.style.width = sizeDiv;
	div.style.height = sizeDiv;
	div.style.backgroundColor = color;
	console.dir(div.style.backgroundColor);
	console.table(div.style);
	return div;
}
creadDiv(4);
