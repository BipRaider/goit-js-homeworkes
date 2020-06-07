'use strict';
//Получить массив имен всех пользователей (поле name).
import users from './users.js'; // импортировали файл users.js
// ------------------------------------task-1--------------------

console.log(
  'task-1',
  users.reduce((accum, elem) => [...accum, elem.name], []),
);
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
// ------------------------------------task 2------------------------
//Получить массив объектов пользователей по цвету глаз (поле eyeColor).
console.log(
  'task-2',
  users.reduce((accum, elem) => [...accum, elem.eyeColor], []),
);
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
// ------------------------------------task 3-----------------------
// Получить массив имен пользователей по полу (поле gender)
// 1 отфильтровали  по gender ,2. вернули  именами gender === male
console.log(
  'task-3',
  users
    .filter(user => user.gender === 'male')
    .reduce((accum, elem) => [...accum, elem.name], []),
);
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//------------------------------------task 4-----------------------
//Получить массив только неактивных пользователей (поле isActive).

console.log(
  'task-4',
  users
    .filter(user => user.isActive !== true)
    .reduce((accum, elem) => [...accum, elem.name, elem], []),
); // ______Тут не понял что именно хотелось от меня
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//------------------------------------task 5-----------------------
//Получить пользоваля (не массив) по email (поле email, он уникальный)
const getUserWithEmail = (users, email) =>
  users.filter(user => user.email === email);
console.log('task-5', getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}

//------------------------------------task 6-----------------------
//Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age >= min && user.age <= max);
console.log('task-6', getUsersWithAge(users, 20, 30));
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log('task-6', getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
//------------------------------------task 7-----------------------
//Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users =>
  users.reduce((accum, valueBalance) => accum + valueBalance.balance, 0);
console.log('task-7', calculateTotalBalance(users)); // 20916

//------------------------------------task 8-----------------------
// Массив имен всех пользователей у которых есть друг с указанным именем.
// find --нашли все true ,
// filter --вернул все обьект в которых find выдал true  ,
// map --вернула массив с именами у кого есть этот друг
const getUsersWithFriend = (users, friendName) =>
  users
    .filter(user => user.friends.find(friend => friend === friendName))
    .map(names => names.name);
console.log('task-8', getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log('task-8', getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//------------------------------------task 9-----------------------
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users =>
  users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(names => names.name);

console.log('task-9', getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//------------------------------------task 10-----------------------
// Получить массив всех умений всех пользователей (поле skills),
// при этом не должно быть повторяющихся умений
//  и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users =>
  users
    .map(user => user.skills)
    .reduce((accum, skill) => [...accum, ...skill], [])
    .sort((a, b) => a.localeCompare(b, 'en'))
    .filter((skill, i, array) => array.indexOf(skill) === i);
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

const getSortedUniqueSkills1 = users => [
  ...new Set(
    users
      .map(user => user.skills)
      .reduce((accum, skill) => [...accum, ...skill], [])
      .sort((a, b) => a.localeCompare(b, 'en')),
  ),
];
//https://learn.javascript.ru/set-map
console.log('task-10', getSortedUniqueSkills(users));
console.log('task-10', getSortedUniqueSkills1(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

//------------------------------------task 11-----------------------
console.log('task-11');
