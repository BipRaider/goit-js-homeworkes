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
// -------------
const storage = new Storage([ 'Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор' ]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
