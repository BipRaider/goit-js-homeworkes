'use strict';
//Напиши класс Car с указанными свойствами и методами.
console.log('------------------start task 5 ------------------');
class Car {
	/*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */

	/*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */
	constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
		this._speed = speed;
		this._price = price;
		this._maxSpeed = maxSpeed;
		this._isOn = isOn;
		this._distance = distance;
	}
	static getSpecs(car) {
		const dateCar = {
			speed: car._speed,
			maxSpeed: car._maxSpeed,
			isOn: car._isOn,
			distance: car._distance,
			price: car._price
		};
		console.table(dateCar);
	}
	/*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */
	get price() {
		return this._price; //возвращает цену
	}
	set price(value) {
		this._price = value; // обновляет цену
	}

	/*
	* Добавь код для того чтобы завести автомобиль
	* Записывает в свойство isOn значение true
	*/

	turnOn() {
		if (!this._isOn) this._isOn = true; // заводит движок
	}

	/*
	* Добавь код для того чтобы заглушить автомобиль
	* Записывает в свойство isOn значение false,
	* и сбрасывает текущую скорость в 0
	*/
	turnOff() {
		if (this._isOn) this._isOn = false; // останавливает движок
	}

	/*
	* Добавялет к свойству speed полученное значение,
	* при условии что результирующая скорость
	* не больше чем значение свойства maxSpeed
	*/
	accelerate(value) {
		if (value <= this._maxSpeed) this._speed += value; // если максимальная скорость больше чем значение записывается скорость
	}
	accelerate1(value) {
		if (value <= this._maxSpeed) {
			this._speed += value;
		} else {
			this._speed = this._maxSpeed; // присвоили  максимальную скорость к скорости
		}
	}
	/*
	* Отнимает от свойства speed полученное значение,
	* при условии что результирующая скорость не меньше нуля
	*/
	decelerate(value) {
		if (this._speed - value > -1) this._speed -= value; // если скорость 0 и больше то отнимается введенные данные
		// тут надо бы добавить если _isOn === false - скорость была ноль (так как двигатель не работает)
	}

	/*
	* Добавляет в поле distance киллометраж (hours * speed),
	* но только в том случае если машина заведена!
	*/
	drive(hours) {
		if (this._isOn) this._distance = hours *= this._speed; // вычисляется пройденное расстояние машины за определенное количество времени
	}
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);

// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(2);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
Car.getSpecs(mustang);
console.log(mustang.price); // 4000
