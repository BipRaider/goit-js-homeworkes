'use strict';
// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
//Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
//Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
//Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
console.log('--------------start task 4---------------');
class StringBuilder {
	constructor(value) {
		this.value = [ value ];
	}

	returnValue() {
		return this.value; // Если сюда ставить .join('') то массив не собирается в одну строку ?!?
	}

	appEnd(str) {
		this.value.push(str);
	}
	prepEnd(str) {
		this.value.unshift(str);
	}
	pad(str) {
		this.appEnd(str);
		this.prepEnd(str);
	}
}

// // Геттер value - возвращает текущее значение поля _value
// const returnValue = function() {
// 	return this.value;
// };

// //Метод append(str) - получает параметр str (строку) и добавляет ее в конец _value
// const appEnd = function(str) {
// 	this.value.push(str);
// 	return this.value;
// };
// //Метод prepend(str) - получает параметр str (строку) и добавляет ее в начало value
// const prepEnd = function(str) {
// 	this.value.unshift(str);
// 	return this.value;
// };
// //Метод pad(str) - получает параметр str (строку) и добавляет ее в начало и в конец _value
// const pad = function(str) {
// 	this.appEnd(str);
// 	this.prepEnd(str);
// 	return this.value;
// };
// //

// StringBuilder.prototype.returnValue = returnValue;
// StringBuilder.prototype.appEnd = appEnd;
// StringBuilder.prototype.prepEnd = prepEnd;
// StringBuilder.prototype.pad = pad;

// ---------------
const builder = new StringBuilder('.');

const items = builder.returnValue();

builder.appEnd('^');
console.log(items.join('')); // '.^'

builder.prepEnd('^');
console.log(items.join('')); // '^.^'

builder.pad('=');
console.log(items.join('')); // '=^.^='
