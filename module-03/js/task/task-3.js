'use strict';
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и
//возвращает имя самого продуктивного (который выполнил больше всех задач).
// Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".
console.log('start_______________task-3');
const findBestEmployee = function(object) {
	const keys = Object.keys(object); // берем значения и з объекта
	let value = 0; // счетчик
	// пропускаем через цикл для перебора значений//сравниваем значения для выяснения большего и записываем  значение в счетчик
	for (const key of keys) if (object[key] > value) value = object[key];
	return value; // возвращаем большое значение
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
	findBestEmployee({
		ann: 29,
		david: 35,
		helen: 1,
		lorence: 99
	})
); // lorence

console.log(
	findBestEmployee({
		poly: 12,
		mango: 17,
		ajax: 4
	})
); // mango

console.log(
	findBestEmployee({
		lux: 147,
		david: 21,
		kiwi: 19,
		chelsy: 38
	})
); // lux
console.log('end_______________task-3');
