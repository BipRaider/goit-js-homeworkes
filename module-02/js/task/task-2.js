'use strict';
// Напиши скрипт подсчета стоимости гравировки украшений.
// Для этого создай функцию calculateEngravingPrice(message, pricePerWord)
//  принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова,
//   и возвращающую цену гравировки всех слов в строке.
console.log('start task-2 ');

function calculateEngravingPrice(message, pricePerWord) {
	let element = 0;
	for (let i = 0; i < message.split(' ').length; i++) {
		element += 1;
	}
	console.log(`Цена за одно слово ${pricePerWord}. Количество слов в гравировке ${element}`);
	console.log(`За ${element} слов вы заплатите ${pricePerWord * element}`);
}

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes sweq', 10)); // 80

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120
console.log('end task-2 ');
console.log('________________________________________________');
