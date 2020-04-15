'use strict';
console.log('end task-5 ');
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
//  Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true,
//   если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

function checkForSpam(message) {
	const text = message.toLowerCase();
	const spam = 'spam'; //переменая с значением которое должно вывадить false
	const sale = 'sale'; // переменая с значением которое должно вывадить true
	let textReturn; // переменая в которую записуеться результат
	// проверка текста на наличие залов
	if (text.includes(spam) || text.includes(sale)) {
		// проверка на наличие запретных слов
		textReturn = true; // если найдено записуеп в переменую возврата true
	} else {
		textReturn = false; // если найдено записуеп в переменую возврата false
	}
	return textReturn; // возврат переменой с резудьтатом
}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news ')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
console.log('end task-5 ');
console.log('________________________________________________');
