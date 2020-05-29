'use strict';
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
//  то есть элементов li.item. Получится 'В списке 3 категории.'.

//  Для каждого элемента li.item в списке ul#categories,
//  найдет и выведет в консоль текст заголовка элемента (тега h2)
//   и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

// const images = document.querySelectorAll('.third-image')
// Array.from(images).forEach(img => console.log(img.getAttribute('src')))
// 1) создать переменную
// 2) записать в нее результат поиска (querySelector или аналоги)
// 3) проводить какие-то операции с результатом поиска (элементом), записанным в переменную
// 4) если это результат поиска querySelectorAll - прежде,
// чем проводить какие-то манипуляции с элементами по отдельности (getAttribute и так далее)
//- сконвертировать псевдомассив элементов в обычный массив (Array.from(elements))

//  Это я расписываю для себя,this my test jobs
console.log('=============task 1 start===============');
const items = document.querySelectorAll('ul#categories .item'); //Нашли элементы с классом item и записали в переменную
const items2 = document.querySelector('#categories').children;

console.log(`В списке ${items.length} категории.`);
console.log(`Вариант 2 = ${items2.length}.`);
console.log('==============1==============');
const headItems = document.querySelectorAll('ul#categories .item'); // мог использовать items, не делав эту переменную
//выбрали [0] элемент в массиве  и вывели его значения
headItems.forEach((item) => console.log(item.children[0].textContent));
console.log('==============2==============');
// выбрали первый дочерний элемент и вывели текст
headItems.forEach((item) => console.log(item.firstElementChild.textContent));
console.log('===============3=============');
document.querySelectorAll('.item').forEach((item) => console.log(item.firstElementChild.textContent)); // сократил
console.log('=============4===============');
//выбрали [1] элемент в массиве и вывели текст первого элемента
headItems.forEach((item) => console.log(item.children[1].firstElementChild.textContent));
console.log('=============5===============');
// выбрали первый дочерний элемент и вывели текст ,
// выбрали соседа  первого дочерний элемент и вывели текст элементов находящихся внутри
headItems.forEach((item) =>
	console.log(item.firstElementChild.textContent, item.firstElementChild.nextElementSibling.textContent)
);
console.log('=============6===============');
// выбрали первый дочерний элемент и вывели текст ,
// выбрали соседа  первого дочерний элемент и вывели количество  элементов находящихся внутри
headItems.forEach((item) =>
	console.log(item.firstElementChild.textContent, item.firstElementChild.nextElementSibling.children.length)
);
console.log('============end================');
