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

const input = 'Сума в веденных чисел';
RequestNumbers(input);

function RequestNumbers(text) {
	let input;
	let value = true;
	let total = 0;
	const numbers = [];

	do {
		input = prompt(`${text} ${total}`); //делаем запрос на число
		if (input === null) {
			// если нажмут cancel выход из цикла и вывести сумму в веденных чисел
			TotalSum(numbers);
			break;
		} else if (NumberRequest(input) === false) {
			// определяем инпут на булл и присваиваем булл значение
			numbers.push(input); //добавляем в объект преобразованное число
			total += Number(input); //  прибавляем к тотал приобразованое число
			console.log(numbers); // проверка в вода
		} else {
			//выводим  при написания не числа
			alert(`Было введено не число, попробуйте еще раз`);
		}
	} while (value); // постояный цикл по камисть не будет выполнено одно из условий
}

//  проверка входящего числа и возращение false or true
function NumberRequest(params) {
	let value;
	value = Number.isNaN(Number(params)); // определяем input на булл и присваиваем булл значение
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

// рекомендаций как писать в js
const YOU_NUMBER = 'You number';
const NO_NUMBER = 'Было введено не число, попробуйте еще раз';
let userInput;
let total = 0;
const numbers = [];

while (userInput !== null) {
	// если пустой текс выводим запрос на в вод от пользователя
	userInput = prompt(YOU_NUMBER, 0); // запрос на в вод чисел

	if (userInput === null) break; // делаем проверку ,если нажали cancel  останавливать цикл
	const userNumber = +userInput; //добавляем введённое значение в срез
	// проверяем в введённое значение на boole
	if (Number.isNaN(userNumber)) {
		// если не число выводим это
		alert(NO_NUMBER);
	} else {
		// если число  добавляем  значение в срез
		numbers.push(userNumber);
	}
}

if (numbers.length > 0) {
	// если больше нуля то пропускать через цикл
	for (let i = 0; i < numbers.length; i += 1) {
		total += numbers[i]; // суммируем значения из среза
	}
}
const message = `Общая сумма чисел равна ${total}`;
alert(message);

console.log('end task-6 ');
console.log('________________________________________________');
