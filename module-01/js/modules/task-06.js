'use strict';
let input;
let total = 0;
let value;

do {
	input = prompt(`Сума в ведёных чисел ${total}`); //делаем запрос на число

	value = Number.isNaN(Number(input)); // определяем инпут на булл и присваиваем булл щначение
	if (input === null) {
		// если нажмут cancel
		alert(`Общая сумма чисел равна ${total}`);
		break;
	} else if (value === true || Number(input) === NaN) {
		// если в вели не число
		alert(`Общая сумма чисел равна ${total}`);
		break;
	}

	total += Number(input); //  прибовляем к тотал приобразованое число
} while (value === false); // отправляем сюда инпут с булевым значением
