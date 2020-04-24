'use strict';
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
//  Функция считает общую сумму запрплаты работников и возращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".
console.log('start_______________task-4');
const countTotalSalary = function(object) {
	const keys = Object.keys(object); // берем значения и з объекта
	let value = 0; // счетчик
	// пропускаем через цикл для перебора значений и записываем  значение в счетчик
	for (const key of keys) value += object[key];
	return value; // возвращаем большое значение
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
	countTotalSalary({
		mango: 100,
		poly: 150,
		alfred: 80
	})
); // 330

console.log(
	countTotalSalary({
		kiwi: 200,
		lux: 50,
		chelsy: 150
	})
); // 400
console.log('end_______________task-4');
