'use strict';
// ----------------------------------------------------Module 6 ---------------------------------------
// Все функциональные методы массивов имеют схожий синтаксис.
// Исходный массив array,вызов метода method и callback-функция callback в качестве аргумента метода.
array.method(callback[(currentValue, index, array)]);
// currentValue-   В большинстве методов,аргументами callback-функции являются значение элемента currentValue (первый параметр),
// index -         Позиция элемента index (второй параметр)
// array -         Cам исходный массив array (третий параметр).
// currentItem — текущий элемент массива
// index — индекс текущего элемента массива
// array — оригинальный массив
array.method((item, idx, arr) => {
	// логика которая будет применяться на каждой итерации
});
// ------------------------------------------------------------------------
// ------------------------------------Array.prototype.forEach()--------------------------------https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// ------------------------------------------------------------------------
// Единственный из функциональных методов который ничего не возвращает,
//  а просто перебирает коллекцию.
array.forEach(callback[(currentValue, index, array)]);
//  Используется как замена цикла for.
const numbers = [ 1, 2, 3 ];
// Классический for
for (let i = 0; i < numbers.length; i += 1) {
	console.log(numbers[i]);
}
// Функциональный forEach
numbers.forEach((num) => console.log(num));
// Указываем параметр idx если нужен доступ к счетчику
numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));
// ------------------------------------------------------------------------
// ------------------------------------Array.prototype.map()--------------------------------https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// ------------------------------------------------------------------------
// Применяет callback-функцию к каждому элементу исходного массива,
//  результат работы callback-функции записывает в новый массив,
//  который и будет результатом выполнения метода.
// Исходный и новый массив всегда имеют одинаковую длину. Не мутирует иходный массив.
array.map(callback[(currentValue, index, array)]);
//Используется для трансформации массива
const numbers = [ 1, 2, 3 ];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // [2, 4, 6]
//Используем map чтобы пройти по базе данных users и получить массив всех имен пользователей.
const users = [
	{ name: 'Mango', isActive: true },
	{ name: 'Poly', isActive: false },
	{ name: 'Ajax', isActive: true }
];
// Для каждого элемента коллекции (user) вернем значение поля name
const names = users.map((user) => user.name);
console.log(names); // ["Mango", "Poly", "Ajax"]
// ------------------------------------------------------------------------
// ------------------------------------Array.prototype.filter()--------------------------------https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// ------------------------------------------------------------------------
//Применяет callback-функцию к каждому элементу исходного массива
//  и если результат ее выполнения имеет значение true,
// то копирует значение из исходного массива в новый массив.
array.filter(callback[(currentValue, index, array)]);
//Используется для фильтрации массива
const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
console.log(numbers.filter((num) => num > 5)); // [6, 7, 8, 9]

const users = [
	{ name: 'Mango', isActive: true },
	{ name: 'Poly', isActive: false },
	{ name: 'Ajax', isActive: true },
	{ name: 'Chelsey', isActive: false }
];
// Для каждого элемента коллекции (user) проверим поле isActive.
// Если оно true, то текущий элемент (user) будет записан в результирующий массив.
const activeUsers = users.filter((user) => user.isActive);
console.log(activeUsers);
// Для каждого элемента коллекции (user) проверим поле isActive.
// Если оно false, то текущий элемент (user) будет записан в результирующий массив.
const inactiveUsers = users.filter((user) => !user.isActive);
console.log(inactiveUsers);
// ------------------------------------------------------------------------
// ------------------------------------Array.prototype.find()--------------------------------https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// ------------------------------------------------------------------------
//Используется для поиска уникального элемента массива
// Применяет callback-функцию к каждому элементу исходного массива и
//  если результат ее выполнения имеет значение true, то возвращает этот элемент и завершает свое выполнение.
array.find(callback[(currentValue, index, array)]);
const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
console.log(numbers.find((num) => num > 5)); // 6
const users = [
	{ id: '000', name: 'Mango', isActive: true },
	{ id: '001', name: 'Poly', isActive: false },
	{ id: '002', name: 'Ajax', isActive: true },
	{ id: '003', name: 'Chelsey', isActive: false }
];

const user = users.find((user) => user.id === '002');
console.log(user);
// Создадим функцию которая будет возвращать нам пользователя по id
const getUserById = (arr, id) => arr.find((x) => x.id === id);
console.log(getUserById(users, '001'));
// ------------------------------------------------------------------------
// ------------------------------------Array.prototype.reduce()--------------------------------https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// ------------------------------------------------------------------------
array.reduce(сallback[(previousValue, currentItem, index, array)], initialValue);
// previousValue — промежуточный результат (аккумулятор)
// currentItem — текущий элемент массива
// index — индекс текущего элемента массива
// array — оригинальный массив
//initialValue - устанавливает начальное значение previousValue
const tweets = [
	{ id: '000', likes: 5, tags: [ 'js', 'nodejs' ] },
	{ id: '001', likes: 2, tags: [ 'html', 'css' ] },
	{ id: '002', likes: 17, tags: [ 'html', 'js', 'nodejs' ] },
	{ id: '003', likes: 8, tags: [ 'css', 'react' ] },
	{ id: '004', likes: 0, tags: [ 'js', 'nodejs', 'react' ] }
];

const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
console.log(likes);
// ------------------------------------------------------------------------
// ---------------------------Array.prototype.every() ---------------------------------https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// ------------------------------------------------------------------------
//Метод every проверяет, прошли ли все элементы массива тест
// Допустим нам нужно узнать достаточно ли большие ВСЕ числа в коллекции.
// Все что нам нужно это буль true/false. Метод every вернет true только тогда,
// когда все элементы коллекции будут удовлетворять условию в callback-функции.
array.every(callback[(currentValue, index, array)]);
const isBigEnough = (val) => val >= 10;
console.log([ 12, 5, 8, 130, 44 ].every(isBigEnough)); // false
console.log([ 12, 54, 18, 130, 44 ].every(isBigEnough)); // true
// ------------------------------------------------------------------------
//---------------------------Array.prototype.some()-------------------------https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// ------------------------------------------------------------------------
//Метод some проверяет, проходит ли по крайней мере один элемент в массиве тест,
// Допустим нам нужно узнать ЕСТЬ ЛИ в коллекции числа больше 10, хотя бы одно
// или больше. Все что нам нужно это буль true/false. Метод some вернет true
// только тогда, когда хотябы 1 или более элементов коллекции будут
// удовлетворять условию в callback-функции.
array.some(callback[(currentValue, index, array)]);
console.log([ 2, 5, 8, 1, 4 ].some(isBigEnough)); // false
console.log([ 12, 5, 8, 1, 4 ].some(isBigEnough)); // true

// -----------
//
const peopleDate = [
	{ name: 'Denis', age: 22, height: 167 },
	{ name: 'Ihor', city: 'Kharkiv' },
	{ age: 22, height: 199 },
	{ city: 'Lviv', phone: '+38050505050' }
];

for (let i = 0; i < peopleDate.length; i++) {
	if (peopleDate[i].name !== undefined) {
		console.log('peopleDate[i]', peopleDate[i]); // вернёт тот массив в котором есть имя
	}
}

const arrayName = peopleDate.forEach((obj) => {
	if (obj.name) console.log(obj);
});

// ----------------------------

const peopleDate1 = [
	{ name: 'Denis', age: 22, height: 167 },
	{ name: 'Ihor', city: 'Kharkiv' },
	{ age: 22, height: 199 },
	{ city: 'Lviv', phone: '+38050505050' }
];

// const newPeopleData = peopleData.map(({ name, city }) => ({ name, city }));

const cleanPeople2 = peopleDate1.map((i, index) => {
	// разбили на массив обьектов на обьекты по одному
	console.log('i', i); // обьект
	console.log('index', index); // индекс обьекта
	console.log('Object.entries(i) =', Object.entries(i)); //разбили обьект на массив
	const existedEntries = Object.entries(i).filter(([ key, value ]) => value); // потом разбитый массива получаем Value
	console.log('----3----', existedEntries);
	return { ...Object.fromEntries(existedEntries), index }; // собирает значения в обьект  и дабовляем индэкс
}); //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
console.log('--------', cleanPeople2);
///---------------------
// Создать новый масссив cleanPeopleData, в который положить трансформированный массив newPeopleData.
// в нем не должно быть полей со значением undefined и должно появиться новое поле index.
// то есть, {name: "Denis", city: undefined} должен превратиться в {name: “Denis”, index: 0}
const worms = [
	{ name: 'Артем', length: 15, age: 5 },
	{ name: 'Илья', length: 10, age: 2 },
	{ name: 'Анатолий', length: 200, age: 67 }
];
// Отфильтровать червяков и оставить только тех, у которых возраст меньше 20
// Затем добавить оставшимся зубы (claws: true)
// Или teeth: true
const filterWorms = worms.filter((worm) => {
	if (worm.age <= 20) {
		let newWorms = worm;
		newWorms.claws = true;
		return newWorms;
	}
});
console.log(filterWorms);

const wormsJunior = worms.filter((worm) => worm.age < 20).map((worm) => {
	worm.teeth = 'true';
	return worm;
});
console.log(wormsJunior);
//0-----
const findWorm = worms.find((worm) => worm.name === 'Анатолий');
console.log(findWorm.name);
// ----
const everyWorms = worms.every((worm) => worm.age >= 15);
console.log(everyWorms);

const someWorm = worms.some((worm) => worm.age >= 15);
console.log(someWorm);
console.log('--------------');
const wormSone = worms
	//.map((worm) => ({ ...worm, age: 15 })) // изменили возраст всем червякам
	.map((worm) => (worm.age = 15)) // изменили возраст всем червякам
	.every((worm) => worm === 15); // проверяем все ли червяки 15 лет

console.log(wormSone);

const te = [ 'ss', 'ss1', 'ss2', 'ss3', 'ss4' ].reduce((accum, elem) => [ ...accum, elem + ' text' ], []);
console.log(te); //["ss", "ss1", "ss2", "ss3", "ss4"]

const tePlus = [ 'ss', 'ss1', 'ss2', 'ss3', 'ss4' ].reduce((accum, elem) => [ ...accum, elem + ' www ' ], []);
console.log(tePlus); //[('ss www ', 'ss1 www ', 'ss2 www ', 'ss3 www ', 'ss4 www ')];

const re = [ { a: 2 }, { a: 2 } ].reduce((acum, elem) => [ ...acum, elem ], []);
console.log(re); //[{…}, {…}]

// -------------------------
// сортируем по алфавиту используя сортировку по английской раскладке
[ 'еа', 'ёж', 'ея' ].sort((a, b) => b.localeCompare(a, 'ru'));
Array(3)[('ея', 'ёж', 'еа')][('еа', 'ёж', 'ея')].sort((a, b) => a.localeCompare(b, 'ru'));
Array(3)[('еа', 'ёж', 'ея')].sort((a, b) => a.localeCompare(b, 'en'));
// -----------------------
///https://learn.javascript.ru/set-map
[ ...new Set(array) ];
//-==========
const tweets = [
	{ id: '000', likes: 5, tags: [ 'js', 'nodejs' ] },
	{ id: '001', likes: 2, tags: [ 'html', 'css' ] },
	{ id: '002', likes: 17, tags: [ 'html', 'js', 'nodejs' ] },
	{ id: '003', likes: 8, tags: [ 'css', 'react' ] },
	{ id: '004', likes: 0, tags: [ 'js', 'nodejs', 'react' ] }
];
const like = tweets // в вели массив который подлежит  переборке
	.map((tweet) => tweet.likes) // выбрали те значения которые нужно записать в массив
	.sort((a, b) => a - b) // отсортировали по возрастанию
	.reduce((a, b) => a + b); // подсчитали
console.log(like);
// -----------------------------------new Set() --- https://learn.javascript.ru/set-map
//С JavaScript 1.6/ECMAScript 5 вы можете использовать собственный метод filter массива следующим образом,
//чтобы получить массив с уникальными значениями:
function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
}
// usage example:
var a = [ 'a', 1, 'a', 2, '1' ];
var unique = a.filter(onlyUnique); // returns ['a', 1, 2, '1']
//Если вы хотите сохранить последнее вхождение значения, просто замените indexOf на lastIndexOf.
// С ES6 это может быть сокращено:
// usage example:
var myArray = [ 'a', 1, 'a', 2, '1' ];
var unique = myArray.filter((v, i, a) => a.indexOf(v) === i);
// unique is ['a', 1, 2, '1']
// ES6 имеет собственный объект. Set для хранения уникальных значений. Чтобы получить массив с уникальными значениями, вы можете сделать это сейчас:
var myArray = [ 'a', 1, 'a', 2, '1' ];
let unique = [ ...new Set(myArray) ];
// unique is ['a', 1, 2, '1']
