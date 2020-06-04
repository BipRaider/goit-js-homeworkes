'use strict';

console.log('=============task 2 start===============');
// В HTML есть пустой список ul#ingredients.
// В JS есть массив строк.

const ingredients = [ 'Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы' ];
//========test 5
const idIngred = document.querySelector('#ingredients');

function test4(elem, array) {
	//создали и собрали массив тэгов
	const creadLi = (text) => {
		let li = document.createElement('li');
		li.textContent = text;
		return li;
	};
	let returnLi = array.map((text, i) => (i = creadLi(text)));
	elem.append(...returnLi);
}

test4(idIngred, ingredients);
// ================================test 1======================
// ingredients.forEach((text, i) => {
// 	const idIns = document.querySelector('#ingredients'); // нашли элемент с id в html
// 	i = document.createElement('li');
// 	i.textContent = text;
// 	return idIns.appendChild(i);
// });
// =======================================test 2 ==========================
// function addLiItemsInUl(elem, array) {
// 	return array.forEach((text, i) => {
// 		i = document.createElement('li');
// 		i.textContent = text;
// 		return (document.querySelector(elem).appendChild(i).textContent = text);
// 	});
// }
// addLiItemsInUl('#ingredients', ingredients);
//=========================================test 3 ============================
//сократил как мог , может там еще через map() можно
// function test3(elem, array) {
// 	return array.forEach(
// 		(text) => (document.querySelector(elem).appendChild(document.createElement('li')).textContent = text)
// 	);
// }
// test3('#ingredients', ingredients);
//========test 4

// function test4(elem, array) {
// 	//создали и собрали массив тэгов
// 	const creadLi = (text) => {
// 		let li = document.createElement('li');
// 		li.textContent = text;
// 		return li;
// 	};
// 	let returnLi = array.map((text, i) => (i = creadLi(text)));

// 	document.querySelector(elem).append(...returnLi);
// }

// task-2.js Обращение к DOM внутри цикла - плохое решениие.
//  Приритет в работе с DOM это минимизаций обращений к
//   DOM В этом заднии приоритет выражается в том,
//    чтобы добавить массив элементов за одно обращение.
// //     Обратите внимание на прием
// parent.append(...items)
// test4('#ingredients', ingredients);
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//  после чего вставит все li за одну операцию в список ul.ingredients.
//   Для создания DOM-узлов используй document.createElement().
