/* eslint-disable no-alert */
const PRINT_COUNTRY = 'Напишите название страны в которую нужно доставить товар';
const CANCEL_BY_USER = 'Отменено пользователем!';
const NOT_DELIVERY = 'В вашей стране доставка не доступна';
const CNINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
const SOUTH_AMERICA = 'Южная америка';

let message = prompt(PRINT_COUNTRY);
let priсe = 0;
let countryName;

if (message === null) {
	message = CANCEL_BY_USER;
} else {
	// преоброзовали первую букву в верхний регистр  всё остольное в нижний регистр и перебор через кейс
	countryName = message[0].toUpperCase() + message.slice(1).toLowerCase();
	switch (countryName) {
		case CNINA:
			priсe = 100;
			break;

		case SOUTH_AMERICA:
			priсe = 250;
			break;

		case AUSTRALIA:
			priсe = 170;
			break;

		case INDIA:
			priсe = 80;
			break;
		case JAMAICA:
			priсe = 120;
			break;
		default:
			message = NOT_DELIVERY;
	}
}
//  если prive больше нуля то произвести следующие действия где меняем значение выводимого в massage
if (priсe > 0) {
	const PRICE_DELIVERY = `Доставка в ${countryName} будет стоить ${priсe} кредитов`;
	message = PRICE_DELIVERY;
}
alert(message);
