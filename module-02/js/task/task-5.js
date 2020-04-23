'use strict';
console.log('start task-5 ');
//Напиши  функцию checkForSpam(message), принимающую 1 параметр message - строку.
//  Функция проверяет ее на содержание слов spam и sale. Если нашли запрещённое слово то функция возвращает true,
//   если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.
const checkForSpam2 = (str) => {
	const source = str.toLowerCase();
	return source.includes('spam') || source.includes('sale');
};

//my
function checkForSpam(message) {
	const text = message.toLowerCase();
	const spam = 'spam';
	const sale = 'sale';

	let textReturn; // переменная в которую запишутся результат
	// проверка текста на наличие слов

	if (text.includes(spam) || text.includes(sale)) {
		// проверка на наличие запретных слов
		textReturn = true; // если найдено запишутся в переменную возврата true
	} else {
		textReturn = false; // если найдено запишутся в переменную возврата false
	}
	return textReturn; // возврат переменой с результатом
}

// my
function checkForSpam1(message) {
	const text = message.toLowerCase();
	const words = [ 'spam', 'sale' ]; // сделали срез  слов что надо искать
	//  запускаем цикл перебора
	for (const word of words) {
		//  делаем проверку
		if (text.includes(word)) {
			//  если элемент был найден вернёт  данное решение
			return true;
		}
	}
	//  если нечего не было найдено то вернет это
	return false;
}
//
function setSpamWords(...spamWords) {
	return function checkInclude(s) {
		const arg = spamWords;
		const string = s.toLowerCase();
		for (let i = 0; i < arg.length; i += 1) {
			if (string.includes(arg[i])) return true;
		}
		return false;
	};
}

// А вот и нужная нам функция:
const checkForSpam3 = setSpamWords('spam', 'sale');
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news ')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

console.log(checkForSpam1('Latest technology news ')); // false

console.log(checkForSpam1('JavaScript weekly newsletter')); // false

console.log(checkForSpam1('Get best sale offers now!')); // true

console.log(checkForSpam1('[SPAM] How to earn fast money?')); // true
console.log('end task-5 ');
console.log('________________________________________________');
