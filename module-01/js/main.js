'use strict';
// В файле куда импортируем прописуем это
// import{то что надо ипортировать } from 'указываем откуда экспортировать';
// Если значение export экспортировалось по default , { } не нужно писать.
// import * as имя через которое мы будем обращаться  from 'указываем откуда экспортировать';
// import * as name from './style.js'

//  В файле из которого надо произвести экспорт прописуеться
//export{ перечесляем что экспортировать };
//export default  имя значания ; -- в этом случаее мы экспортируем привязку к значению .Берется значение первоночальное

// import или export{ начальное  as изменёное  }  С помощью {as} можно изменить имя  переменной к которой мы обращаемся
import './modules/task-01.js';
import './modules/task-02.js';
import './modules/task-03.js';

let date = new Date(); // получаем текущую дату
let time = date.getHours(); // получаем текущее время в часах
if (
	time < 13 // сравниваем время с число 13
)
	alert('Доброе утро!'); // если время меньше 13
else alert('Добрый вечер!'); // если время равно 13 и больше
