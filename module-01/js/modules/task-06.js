'use strict';
let input;
let total = 0;
let value;

do {
	input = prompt(`Сума в ведёных чисел ${total}`); //делаем запрос на число

	value = Number.isNaN(Number(input)); // определяем инпут на булл и присваиваем булл значение
	if (input === null) {
		// если нажмут cancel выход из цыкла
		alert(`Общая сумма чисел равна ${total}`);
		break;
	} else if (value === true && Number(input) === NaN) {
		// если в вели не число выходи из цыкла
		alert(`Общая сумма чисел равна ${total}`);
		break;
	}

	total += Number(input); //  прибавляем к тотал приобразованое число
} while (value === false); // отправляем сюда инпут с булевым значением
