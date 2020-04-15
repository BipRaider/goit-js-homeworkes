'use strict';
console.log('end task-4 ');

// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.
function formatString(value) {
	const returnText = [];
	// Запуск перебора текста входящего в функцию
	for (let i = 0; i < value.length; i++) {
		// перебор текста по длине

		if (i < 40) {
			// все символы которых индекс меньше 40 отправляються сюда
			let excessText = value[i]; // записуем перебраные буквы в срез
			returnText.push(excessText); // пушим весь входящий текс в переменую
		} else if (i === 40) {
			// если текста больше чем 40 символов добавиляем "..."
			returnText.push('...');
		}
	}

	return returnText.join(''); // обьеденяем обьект в одну строку с разделителем пробела . И возвращаем результат.
}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// // вернется форматированная строка
console.log('end task-4 ');
console.log('________________________________________________');
