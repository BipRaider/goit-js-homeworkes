'use strict';
console.log('start task-3 ');
// Напиши фукцнию findLongestWord(string),
// которая принимает параметром произвольную строку (в строке будут только слова и пробелы)
//  и возвращает самое длинное слово в этой строке.

//  в вести количество слов
//  разбить текст на слова
//  узнать самое длиное слово

function findLongestWord(text) {
	const listText = text.split(' '); // приобразовали строку в срез
	let value = 0;
	let longWord = '';
	for (let i = 0; i < listText.length; i++) {
		const word = listText[i]; //j,
		let value1 = word.length;
		// проверяем на дилну и если
		if (value1 > value) {
			value = value1; //присваиваем нове число переменной
			longWord = word; //присваиваем новое слово  переменной
		}
	}
	console.log(`Самое длинное слово (${longWord}) в нем ${value} букв`);
}
const text = prompt('в ведите своё предложение чтобы узнать какое слово самое длинное в нём');
console.log(findLongestWord(text));

console.log('end task-3 ');
console.log('________________________________________________');
