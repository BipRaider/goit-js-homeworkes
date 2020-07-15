const myPnotify = (a) => {
	const myStackSuccess = new Stack({
		dir1: 'down',
		dir2: 'right',
		firstpos1: 25,
		firstpos2: 125
	});
	const myStackError = new Stack({
		dir1: 'down',
		dir2: 'left',
		firstpos1: 25,
		firstpos2: 125
	});
	if (a === 0) {
		return error({
			title: 'Не найдено',
			text: 'Что-то пошло не так и страна не найдена',
			delay: 1000,
			stack: myStackError
		});
	}
	return success({
		title: 'Найдено',
		text: 'Найдена одна страна по вашему запросу  ',
		delay: 1000,
		stack: myStackSuccess
	});
};

module.exports = {
	myPnotify
};
