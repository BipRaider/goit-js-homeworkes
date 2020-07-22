export default {
	body: document.querySelector('body'),
	form() {
		return document.querySelector('form[name="queryForm"]');
	},
	gallery() {
		return document.querySelector('ul[name="listCard"]');
	},
	but: document.querySelector('.js-but'),
	top: document.querySelector('.js-top'),
	down: document.querySelector('.js-down')
};
