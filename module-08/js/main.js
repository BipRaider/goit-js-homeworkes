'use strict';
import users from './items.js';
// Разбей задание на несколько подзадач:
//+ 1 Создай галерею с возможностью клика по ее элементам и
//+ 2 просмотра полноразмерного изображения в модальном окне.
// +3 Создание и рендер разметки по массиву данных и предоставленному шаблону.
// +4 Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
//+ 5 Открытие модального окна по клику на элементе галереи.
//+ 6 Подмена значения атрибута src элемента img.lightbox__image.
//+ 7 Закрытие модального окна по клику на кнопку button[data-action="close-modal"].
//8+ Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того,
//9+ чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
// +10 Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img,
//  +и указываться в href ссылки (это необходимо для доступности).

// + Закрытие модального окна по клику на div.lightbox__overlay.
// Закрытие модального окна по нажатию клавиши ESC.
// +Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".

// =======gallery
const gallery = document.querySelector('.js-gallery');
const gallery__link = gallery.querySelector('.gallery__link');
const gallery__image = gallery.querySelector('.gallery__image');
//  Start Вывод картинок на в браузер
//imageTemplate - принимает значения ,деструктуризирует их и собирает шаблон карточку картинки с ссылкой
function imageTemplate({ preview, original, description }) {
  const template = `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
    </a>
  </li>`;
  return template;
}
//addImagInGallery - собирает массив картинок по шаблону и добавляет на страницу
const addImagInGallery = (findElem, addWhere, array) => {
  let text = array.map(image => imageTemplate(image)).join('');
  findElem.insertAdjacentHTML(addWhere, text);
};
addImagInGallery(gallery, 'beforeend', users);
//End Вывод картинок на в браузер ==================
// box

const lightbox = document.querySelector('.js-lightbox');
const lightbox__image = lightbox.querySelector('.lightbox__image');

const lightbox__button = lightbox.querySelector(
  'button[data-action="close-lightbox"]',
);
const lightbox__content = lightbox.querySelector('.lightbox__content');
const lightbox__overlay = lightbox.querySelector('.lightbox__overlay');
//Прослушка
gallery.addEventListener('click', event =>
  openFullImg(event, lightbox, lightbox__image),
);
lightbox.addEventListener('click', event =>
  closeIMG(event, lightbox, lightbox__image, users, gallery),
);
lightbox.addEventListener('click', event => clickImg(event, users, gallery));
// ----
document.addEventListener('keydown', event =>
  keyDown(event, lightbox__image, users, data),
);
// document.removeEventListener('keyDown', keyDown); //снимаем прослушку делать это надо когда нам больше не нужна прослушка
// ----
//  Change images
//keyDown - при нажатий клавишьи стрелка влево или вправо меняет картинку
let data = users.length;
function keyDown(e, img, user) {
  event.stopPropagation();
  if (data >= 8) data = 0;
  if (e.key === 'ArrowLeft') data += 1; // надо использовать code
  if (data <= 0) data = 8;
  if (e.key === 'ArrowRight') data -= 1;
  if (data === 0) data = 8;
  img.src = user[data].original;
}
//clickImg - клик на картинку ,меняет картинку
function clickImg(event, user, gall) {
  event.stopPropagation();
  const target = event.target;
  //когда event  меняет картинку случайно
  let counter = Math.floor(Math.random() * 9);
  target.src = user[counter].original;
}
//https://developer.mozilla.org/ru/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets
//https://learn.javascript.ru/keyboard-events
//Закрывает модульное окно и меняет значения
const closeIMG = (event, elem, img) => {
  event.stopPropagation();
  const target = event.target;
  if (target.tagName !== 'IMG') {
    img.src = '#';
    elem.classList.remove('is-open');
    return;
  }
};
// Функция открытия модульного окна , добавляет класс и выставляет картинку полного размера на модульное окно.
const openFullImg = (event, elem, image) => {
  event.stopPropagation(); // Останавливаем дальнейшее всплывание событий
  event.preventDefault(); // отключаем поведение по умолчанию при клике (не переходит по ссылки в теге <a>  на страницу )
  const target = event.target;
  if (target.tagName !== 'IMG') return; // Проверяем event if  не картинка нечего не делать
  elem.classList.add('is-open'); // добавляем класс lightbox
  image.src = target.dataset.source;
  //event.stopImmediatePropagation(); ///-- остановит все события(Не прекращайте всплытие без необходимости)
};

//-----------чтиво
//https://developer.mozilla.org/ru/docs/Web/API/Event/preventDefault
// https://media.prod.mdn.mozit.cloud/samples/domref/dispatchEvent.html
