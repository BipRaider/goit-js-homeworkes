'use strict';
'use strict';
console.log('start task-6 ');
// Напиши скрипт со следующим функционалом:

//+ 1. При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.

//+ 2.Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.

// 3.После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total.
//  Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.

// 4. bell Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно.
// Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз',
//  при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.

const input = 'Сума в ведёных чисел';
RequestNumbers(input);

function RequestNumbers(text) {
	let input;
	let value = true;
	let total = 0;
	const numbers = [];

	do {
		input = prompt(`${text} ${total}`); //делаем запрос на число
		if (input === null) {
			// если нажмут cancel выход из цикла и вывести сумму в ведёных чисел
			TotalSum(numbers);
			break;
		} else if (NumberRequest(input) === false) {
			// определяем инпут на булл и присваиваем булл значение
			numbers.push(input); //добовляем в обьект приобразованое число
			total += Number(input); //  прибавляем к тотал приобразованое число
			console.log(numbers); // проверка в вода
		} else {
			//выводим  при написания не числа
			alert(`Было введено не число, попробуйте еще раз`);
		}
	} while (value); // постояный цыкл покамись не будент выполнено одно из условий
}

//  проверка входящего числа и возращение fallse or ture
function NumberRequest(params) {
	let value;
	value = Number.isNaN(Number(params)); // определяем инпут на булл и присваиваем булл значение
	return value;
}

// Функция подсчёта суммы в срезе чисел
function TotalSum(value) {
	let sum = 0;
	for (let i = 0; i < value.length; i++) {
		sum += Number(value[i]);
	}
	if (sum === 0) {
		return alert('Подсчитывать нечего');
	}
	return alert(`Общая сумма чисел равна ${sum}`);
}

console.log('end task-6 ');
console.log('________________________________________________');
