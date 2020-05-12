'use strict';
//Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.
//  В prototype функции-конструктора добавь метод getInfo(),
//  который выводит в консоль значения полей login и email объекта который его вызвал.

// Функция конструктор принимающая два значения  login,email
const Account = function({ login = null, email = null }) {
	this.login = login;
	this.email = email;
};

//функцию которая  выводит через  console.log() login и email
const Info = function() {
	console.log(this.login, this.email);
};

//  Применяется для записи функций в метод
Account.prototype.getInfo = Info; //записали в метод Account  функцию Info
console.log(Account.prototype.getInfo); // function
// явное передача значений
const mango = new Account({
	login: 'Mangozedog',
	email: 'mango@dog.woof'
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
console.log('Всё что есть в манго --', mango);

const poly = new Account({
	email: 'poly@mail.com',
	login: 'Poly'
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
console.log('Всё что есть в поли --', poly);

// ____________________________________test-1_____________________________
// Функция конструктор принимающая два значения  login,email

const Account1 = function(login = null, email = null) {
	this.login = login;
	this.email = email;
};

//функцию которая  выводит через  console.log() login и email
const Info1 = function() {
	console.log(this.login, this.email);
};

//  Применяется для записи функций в метод
Account1.prototype.getInfo1 = Info1; //записали в метод Account  функцию Info
console.log(Account1.prototype.getInfo1); // function

// не явная передача значений(присваивается значения соответственно очереди)
const mango1 = new Account1('mango@dog.woof', 'Mangozedog');

mango1.getInfo1(); // Login: Mangozedog, Email: mango@dog.woof
console.log('Всё что есть в манго --', mango1);
