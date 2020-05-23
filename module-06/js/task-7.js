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
