'use strict';
console.log('start task-3 ');
// Напиши фукцнию findLongestWord(string),
// которая принимает параметром произвольную строку (в строке будут только слова и пробелы)
//  и возвращает самое длинное слово в этой строке.

//  в вести количество слов
//  разбить текст на слова
//  узнать самое длиное слово

function findLongestWord(text) {
	const listText = text.split(' '); // преобразовали строку в срез
	let value = 0;
	let longWord = '';
	for (let i = 0; i < listText.length; i++) {
		const word = listText[i]; //j,
		let value1 = word.length;
		// проверяем на длину и если
		if (value1 > value) {
			value = value1; //присваиваем нове число переменной
			longWord = word; //присваиваем новое слово  переменной
		}
	}
	return `Самое длинное слово в (${longWord}) в нем ${value} букв`;
}

//  вариант 2
const message1 = 'asdasdasd asd asdas asd asdasd a dasd a dasd ';
const words1 = message1.split(' '); // разбили текст на срез
let longestWord1 = words1[0];

// запустили цикл по переборки слов
for (let i = 0; i < words1.length; i++) {
	// сравниваем длину каждого слова
	if (words1[i].length > longestWord1.length) {
		// если длина слова была больше перезаписываем слово на более длинное слово
		longestWord1 = words1[i];
	}
}
// 3
for (const word in words1) {
	if (word.length > longestWord1.length) {
		longestWord1 = word;
	}
}
// const text = prompt('в ведите своё предложение чтобы узнать какое слово самое длинное в нём');
console.log(findLongestWord('в ведите своё предложение чтобы узнать какое слово самое длинное в нём'));

console.log('end task-3 ');
console.log('________________________________________________');
