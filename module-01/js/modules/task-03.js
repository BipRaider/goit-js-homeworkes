'use strict';

const ADMIN_PASSWORD = 'admin';
let user = prompt(' В ведите пaроль');

if (user === null) {
	alert('Отменено пользователем!');
} else if (ADMIN_PASSWORD === user) {
	alert('Добро пожаловать!');
} else if (ADMIN_PASSWORD !== user) {
	alert('Доступ запрещен, неверный пароль!');
}

console.log('===========================');
