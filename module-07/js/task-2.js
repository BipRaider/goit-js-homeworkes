'use strict';
console.log('=============task 2 start===============');
// В HTML есть пустой список ul#ingredients.
// В JS есть массив строк.

const ingredients = [ 'Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы' ];
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
function test3(elem, array) {
	return array.forEach(
		(text) => (document.querySelector(elem).appendChild(document.createElement('li')).textContent = text)
	);
}
test3('#ingredients', ingredients);
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//  после чего вставит все li за одну операцию в список ul.ingredients.
//   Для создания DOM-узлов используй document.createElement().
console.log('=============task 2 end===============');
