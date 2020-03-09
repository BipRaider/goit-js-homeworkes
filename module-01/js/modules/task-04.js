'user stript';
let credits = 23580;
const pricePerDroid = 3000;

let value = prompt('сколько надо дроидов?');
let totalPrice = 0;

if (totalPrice === null) {
	сonsole.log('Отмена пользователем');
} else if (pricePerDroid * value > credits) {
	console.log('Недостаточно средств на счету!');
} else if (pricePerDroid * value <= credits) {
	totalPrice = pricePerDroid * value;
	credits -= totalPrice;
	console.log(`Вы купили ${value} дроидов, на сумму ${totalPrice} , на счету осталось ${credits} кредитов.`);
}

console.log('===========================');
