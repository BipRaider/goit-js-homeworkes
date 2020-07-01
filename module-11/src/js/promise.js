'use strick';
//-------------------------task2
const delay = (ms) => {
	return new Promise((resolve, reject) => {
		if (ms < 1000) reject('строка  error ------');

		setTimeout(() => {
			resolve(ms);
		}, ms);
	});
};

const logger = (time) => console.log(`Resolved after ${time}ms`);

delay(6000).then(logger);
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
delay(100)
	.then((value) => {
		console.log(value);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		console.log('finished!');
	});

//----------------------------- task 2
//Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback,
// а принимала всего два параметра allUsers и userName и возвращала промис.

const users = [
	{ name: 'Mango', active: true },
	{ name: 'Poly', active: false },
	{ name: 'Ajax', active: true },
	{ name: 'Lux', active: false }
];

const toggleUserState = (allUsers, userName) => {
	const updatedUsers = allUsers.map((user) => user.name);

	return new Promise((resolve, reject) => {
		if (updatedUsers.indexOf(userName) === -1) reject(userName);
		resolve(userName);
	});
};
('task 2--------------------Таких нету');
const logger1 = (updatedUsers) => console.log('task 2--------------------Такое име есть :', updatedUsers);
const logger2 = (updatedUsers) => console.warn('task 2--------------------Таких нету', updatedUsers);
/*
	   * Сейчас работает так
	   */
toggleUserState(users, 'Mango').then(logger1).catch(logger2);
toggleUserState(users, 'Lux').then(logger1).catch(logger2);
toggleUserState(users, 'Lux2').then(logger1).catch(logger2);
toggleUserState(users, 'Poly').then(logger1).catch(logger2);
toggleUserState(users, 'Ajax').then(logger1).catch(logger2);
toggleUserState(users, 'Ajax1').then(logger1).catch(logger2);
toggleUserState(users, 'Ajax7').then(logger1).catch(logger2);
///------------------------------------------------task 3
//Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError,
// а принимала всего один параметр transaction и возвращала промис.

const randomIntegerFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
	const delay = randomIntegerFromInterval(200, 500);
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const canProcess = Math.random() > 0.3;

			if (canProcess) resolve(`Transaction ${transaction.id} processed in ${delay}ms`);
			reject(`Error processing transaction ${transaction.id}. Please try again later.`);
		}, delay);
	});
};

const logSuccess = (id, time) => {
	console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = (id) => {
	console.warn(`Error processing transaction ${id}. Please try again later.`);
};

makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);
makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);
makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
