const { success, error, Stack } = require('../../node_modules/@pnotify/core');

function myPnotify(a) {
  const myStackSuccess = new Stack({
    dir1: 'down',
    dir2: 'right',
    firstpos1: 25,
    firstpos2: 125,
  });
  const myStackError = new Stack({
    dir1: 'down',
    dir2: 'left',
    firstpos1: 25,
    firstpos2: 125,
  });

  if (a === 0) {
    return error({
      title: 'НЕЧЕГО НЕ НАЙДЕНО',
      text: 'По пробуйте еще свой запрос',
      delay: 2000,
      stack: myStackError,
    });
  }
  if (a >= 1) {
    return success({
      title: 'ДОБАВЛЕНО НОВЫЕ КАРТИНКИ',
      text: 'Смотрите картинки ниже ',
      delay: 2000,
      stack: myStackError,
    });
  }
  return success({
    title: 'НАЙДЕНО НОВЫЕ КАРТИНКИ',
    text: 'Приятного просмотра ',
    delay: 2000,
    stack: myStackSuccess,
  });
}

module.exports = {
  myPnotify,
};
