'use strict';

const countrys = [ 'китай', 'чили', 'австралия', 'индия', 'ямайка' ];
const countrysCapitalLetter = [ 'Китай', 'Чили', 'Австралия', 'Индия', 'Ямайка' ];
const prices = [ 100, 250, 170, 80, 120 ];

let message = prompt('В ведите название страны чтобы узнать стоимость доставки');
if (message === null) {
	alert(`Очень жаль что вы не знаете где живёте `);
}
let country = message.toLowerCase();

switch (country) {
	case countrys[0]:
		alert(`Доставка в ${countrysCapitalLetter[0]} будет стоить ${prices[0]} кредитов`);
		break;
	case countrys[1]:
		alert(`Доставка в ${countrysCapitalLetter[1]} будет стоить ${prices[1]} кредитов`);
		break;
	case countrys[2]:
		alert(`Доставка в ${countrysCapitalLetter[2]} будет стоить ${prices[2]} кредитов`);
		break;
	case countrys[3]:
		alert(`Доставка в ${countrysCapitalLetter[3]} будет стоить ${prices[3]} кредитов`);
		break;
	case countrys[4]:
		alert(`Доставка в ${countrysCapitalLetter[4]} будет стоить ${prices[4]} кредитов`);
		break;

	default:
		alert(`В вашей стране "${message}" доставка не доступна!`);
		break;
}
