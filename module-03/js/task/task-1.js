'use strict';
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'+
// заменяет значение hobby на 'skydiving'+
// заменяет значение premium на false +
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
const user = {
	name: 'Mango',
	age: 20,
	hobby: 'html',
	premium: true
};
console.log(user); //before
user.mood = 'happy'; // добавляет поле mood со значением 'happy'
console.log(user); // after

console.log(user.hobby); //before
user.hobby = 'skydiving'; // заменяет значение hobby на 'skydiving'
console.log(user.hobby); // after

console.log(user.premium); //before
user.premium = false; // заменяет значение hobby на 'skydiving'
console.log(user.premium); // after

const keys = Object.keys(user); // ["name", "stars", "capacity"]
console.log('_______________');

for (const key of keys) {
	console.log(`${key}:${user[key]}`);
}
console.log('end_______________task-1');
