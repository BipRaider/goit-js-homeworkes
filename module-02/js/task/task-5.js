'use strict';
console.log('start task-5 ');
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
//  Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true,
//   если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

function checkForSpam(message) {
	const text = message.toLowerCase();
	const spam = 'spam';
	const sale = 'sale';

	let textReturn; // переменая в которую записуеться результат
	// проверка текста на наличие слов

	if (text.includes(spam) || text.includes(sale)) {
		// проверка на наличие запретных слов
		textReturn = true; // если найдено записуеп в переменую возврата true
	} else {
		textReturn = false; // если найдено записуеп в переменую возврата false
	}
	return textReturn; // возврат переменой с резудьтатом
}

function checkForSpam1(message) {
	const text = message.toLowerCase();
	const words = [ 'spam', 'sale' ]; // сделали срез  слов что надо искать
	//  запускаем цикл перебора
	for (const word of words) {
		//  если елемент был найден вернёт  данное решение
		if (text.includes(word)) {
			return true;
		}
	}
	//  если нечего небыло найдено то вернет это
	return false;
}
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
