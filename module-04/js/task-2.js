'use strict';
// Исправь ошибки которые будут в консоли, чтобы скрипт заработал.

const inventory = {
	items: [ 'Knife', 'Gas mask', 'Gas' ],
	// добавляет имя
	add(itemName) {
		console.log(`Adding ${itemName} to inventory`);
		this.items.push(itemName);
	},
	//возвращает не найденные имена
	remove(itemName) {
		console.log(`Removing ${itemName} from inventory`);

		this.items = this.items.filter((item) => item !== itemName);
	}
};

const invokeInventoryAction = function(itemName, action) {
	action(itemName);
	console.log(`Invoking action on-----------${itemName}--------------`);
};
// ----------------------------test 1 start-------------------------------------

const invokeInventoryAction1 = (itemName, obj, action) => {
	obj[action].bind(obj)(itemName);
	console.log(`Invoking action on-----------${itemName}--------------`);
};

invokeInventoryAction1('test', inventory, 'add');
console.log(inventory.items); // ['Knife', 'Medkit']

invokeInventoryAction1('test', inventory, 'remove');
console.log(inventory.items); // ['Knife', 'Medkit']

// ---------------------test 1 end-------------------------------

invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']

invokeInventoryAction('Medkit', inventory.add.bind(inventory));
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
