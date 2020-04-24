'use strict';
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
//  Возвращает массив значений определенного свойства prop из каждого объекта в массиве.
console.log('start_______________task-5');
const products = [
	{
		name: 'Радар',
		price: 1300,
		quantity: 4
	},
	{
		name: 'Сканер',
		price: 2700,
		quantity: 3
	},
	{
		name: 'Дроид',
		price: 400,
		quantity: 7
	},

	{
		name: 'Захват',
		price: 1200,
		quantity: 2
	}
];
//
const getAllPropValues = function(arr, prop) {
	let elements = []; // для записи найдены значений
	// перебираем срез объектов
	for (const object of arr) {
		// проверяем на существования данного значения в объекте
		if (object.hasOwnProperty(prop)) {
			// если найден prop  то записываем его в elements
			elements.push(object[prop]);
		}
	}
	return elements; //возвращаем срез найденных значений
};
// Чуть укорочено
const getAllPropValues1 = (arr, prop) => {
	let elements = [];
	for (const object of arr) if (prop in object) elements.push(object[prop]);
	return elements;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []

console.log(getAllPropValues1(products, 'price')); // тестовое
console.log('end_______________task-5');
