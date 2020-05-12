'use strict';
// Напиши класс User для создания пользователя со следующим свойствами:

// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers
console.log(' ---------------------start task 2---------------------------');
const User = function({ name = 'пусто', age = 'пусто', followers = 'пусто' }) {
	this.name = name;
	this.age = age;
	this.followers = followers;
};

const Info = function() {
	console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
};

User.prototype.getInfo = Info;

const mango = new User({
	name: 'Mango',
	age: 2,
	followers: 20
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
	name: 'Poly',
	age: 3,
	followers: 17
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers
