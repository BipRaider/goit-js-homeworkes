'use strict';
// Напиши функцию calculateTotalPrice(allProdcuts, productName),
//  которая получает массив объектов и имя продукта (значение свойства name).
//   Возвращает общую стоимость продукта (цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.
console.log('start_______________task-6');
const products = [
	{ name: 'Радар', price: 1300, quantity: 4 },
	{ name: 'Сканер', price: 2700, quantity: 3 },
	{ name: 'Дроид', price: 400, quantity: 7 },
	{ name: 'Захват', price: 1200, quantity: 2 }
];

const calculateTotalPrice = (allProdcuts, productName) => {
	// перебор среза для получения объектов
	for (const object of allProdcuts) {
		// если значения верны до вычисляем общую стоимость продукта и Возвращаем
		if (object.name === productName) return object.price * object.quantity;
	}
	// возврат если значения не верны
	return 'Данного товара нету';
};
// НЕ НРАВИТЬСЯ такое решение  ...... 8((
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
console.log(calculateTotalPrice(products, ' нету')); // 2400
console.log('end_______________task-6');
