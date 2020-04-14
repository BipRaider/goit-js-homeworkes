'use strict';
// Задание 1
// Напиши функцию logItems(array), которая получает массив и использует цикл for,
//  который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax']
// с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// const logItems = function(array) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
console.log('task 1 start');
const words = [ 'Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong' ];

const numbers = [ 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 ];

function LogItems(value) {
	for (let i = 0; i < value.length; i++) {
		const element = value[i];
		const numberElement = i + 1;
		console.log(numberElement, element);
	}
}

LogItems(words);
LogItems(numbers);
console.log('task 1 end ');
console.log('________________________________________________');
