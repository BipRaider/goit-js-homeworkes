'use strict';
// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.
console.log('start_______________task-2');
const countProps = function (object) {
  let counter = 0; // создали счётчик для подсчёта
  for (const key in object) {
    // пропускаем через цикл объект
    if (key !== true) {
      // проверяем на валидность , пока поступают свойства а не undefined, увеличиваем счетчик на единицу
      counter += 1;
    }
  }
  return counter; // возвращаем счетчик если в цикле закончит перебор
};

// Укороченная форма
const countProps1 = object => Object.keys(object).length;

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps1({ name: 'Mango', age: 2, age1: 3, age2: 3 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
console.log('end_______________task-2');
