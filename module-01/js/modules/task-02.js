'use strict';

const total = 100;
const ordereds = [ 20, 50, 80, 130, 150 ];

for (const ordered of ordereds) {
	if (total >= ordered) {
		console.log(`Заказ оформлен, с вами свяжется менеджер! Вы сможете приобрести  ${ordered} единиц`);
	} else if (total < ordered) {
		console.log(`На складе недостаточно твоаров! Вы не сможете приобрести ${ordered} единиц`);
	}
}

const ordered = 50;

if (total >= ordered) {
	console.log(`Заказ оформлен, с вами свяжется менеджер!`);
} else if (total < ordered) {
	console.log(`На складе недостаточно твоаров!`);
}
