'use strict';
// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:
console.log('--------------start task 3------------------');
class Storage {
	constructor(product) {
		this.products = product;
	}
}

// getItems(); //- возвращает массив текущих товаров
const getItems = function() {
	return this.products;
};
Storage.prototype.getItems = getItems;

// addItem(item); //- получает новый товар и добавляет его к текущим
const addItem = function(item) {
	this.products.push(item);
};
Storage.prototype.addItem = addItem;
// removeItem(item); //- получет товар и, если он есть, удаляет его из текущих
const removeItem = function(item) {
	let items = this.products.filter((items) => items !== item); //если значение  найдено  то не записывается в it
	this.products.splice(0); // удалили все значения  в массиве
	this.products.push(...items); //Заполнили копией отфильтрованного  массивом
};
Storage.prototype.removeItem = removeItem;
// -------test--------
// ТАК НЕ РАБОТАЕТ
// const removeItem1 = function(item) {
// 	this.products = this.products.filter((items) => items !== item);
// };
// Storage.prototype.removeItem1 = removeItem1;
// -------------
const storage = new Storage([ 'Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор' ]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

console.log('--------------start task 3 test 1------------------');
class Storage1 {
	constructor(product) {
		this.products = product;
	}
}
// getItems(); //- возвращает массив текущих товаров
const getItems1 = function() {
	return this.products;
};
Storage1.prototype.getItems1 = getItems1;
// addItem(item); //- получает новый товар и добавляет его к текущим
const addItem1 = function(item) {
	this.products.push(item);
};
Storage1.prototype.addItem1 = addItem1;
// removeItem(item); //- получет товар и, если он есть, удаляет его из текущих
const removeItem1 = function(item) {
	this.products = this.products.filter((items) => items !== item); //если значение  найдено  то не записывается в it
};
Storage1.prototype.removeItem1 = removeItem1;
// -------------
const storage1 = new Storage1([ 'Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор' ]);
const items1 = storage1.getItems1();
console.table(storage1.getItems1()); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
storage1.addItem1('Дроид');
console.table(storage1.getItems1()); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
storage1.removeItem1('Пролонгер');
console.table(storage1.getItems1()); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
