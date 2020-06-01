'use strict';
// Напиши скрипт для создания галлереи изображений по массиву данных.
// В HTML есть список ul#gallery.
// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
console.log('=============task 3 start===============');
const images = [
	{
		url:
			'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'White and Black Long Fur Cat'
	},
	{
		url:
			'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'Orange and White Koi Fish Near Yellow Koi Fish'
	},
	{
		url:
			'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'Group of Horses Running'
	}
];
// =============test 1 =================
function addImagInGallery(elem, array) {
	return array.forEach((image) =>
		document.querySelector(elem).append(creadLi('js-gallery__box', creadImg('js-img', image)))
	);
}
//Создали img с нужными атрибутами которые содержаться в массиве данных
const creadImg = (cls, { url, alt }) => {
	const img = document.createElement('img');
	img.src = url;
	img.alt = alt;
	img.classList.add(cls);
	return img;
};

//Создали li  с нужным классом и adding  в него img
const creadLi = (addClassElem, addImag) => {
	const liBox = document.createElement('li');
	liBox.classList.add(addClassElem);
	liBox.append(addImag);
	return liBox;
};

addImagInGallery('#gallery', images);

// =============test 2 =================
//возвращаем строку с tag img  в котором добавляем имя класса и из массива добавляем два атрибута с их значениями
const creadImgTest2 = (cls, { url, alt }) => `<img class="${cls}" src="${url}" alt="${alt}">`;
//возвращаем строку с tag li в котором добавляем имя класса и tag img
const creadLiTest2 = (addClassElem, addImag) => `<li class="${addClassElem}">${addImag}</li>`;

// ============ test 2.1 ======
//Находим класс к которому добавить ,задаём куда добавлять ,указываем массив img что надо добавить
// const addImagInGalleryTest2 = (findElem, addWhere, array) => {
// 	return array.forEach((image) =>
// 		document
// 			.querySelector(findElem)
// 			.insertAdjacentHTML(addWhere, creadLiTest2('js-gallery__box', creadImgTest2('js-img', image)))
// 	);
// };

// addImagInGalleryTest2('.gallery', 'beforeend', images); // внутрь element, в самый конец контента
// addImagInGalleryTest2('.gallery', 'afterend', images); //после element
// addImagInGalleryTest2('.gallery', 'beforebegin', images); //перед element
// addImagInGalleryTest2('.gallery', 'afterbegin', images); //внутрь element, в самое начало контента
// =====================test 2.2======

// const addImagInGalleryTest3 = (findElem, addWhere, array) => {
// 	return array.map((image) =>
// 		document
// 			.querySelector(findElem)
// 			.insertAdjacentHTML(addWhere, creadLiTest2('js-gallery__box', creadImgTest2('js-img', image)))
// 	);
// };
// =====================test 2.3======

const addImagInGalleryTest3 = (findElem, addWhere, array) => {
	// собрали отдельно а потом добавили всё в разметку(как я понял ,для оптимизаций так надо делать или как-то так)
	let text = array.map((image) => creadLiTest2('js-gallery__box', creadImgTest2('js-img', image)));
	// нашли нужный  id class и к нему добавляем шаблоны собранный ранние
	return document.querySelector(findElem).insertAdjacentHTML(addWhere, text);
};

addImagInGalleryTest3('.gallery', 'beforeend', images); // внутрь element, в самый конец контента
addImagInGalleryTest3('.gallery', 'afterend', images); //после element
addImagInGalleryTest3('.gallery', 'beforebegin', images); //перед element
addImagInGalleryTest3('.gallery', 'afterbegin', images); //внутрь element, в самое начало контента

//У этого метода есть братья-близнецы. Их синтаксис,
//  за исключением последнего параметра, полностью совпадает с insertAdjacentHTML.
//   Вместе они образуют универсальный швейцарский нож для вставки чего угодно куда угодно.

// elem.insertAdjacentElement(position, elem) — вставляет в произвольное место не HTML-строку, а элемент elem.
// elem.insertAdjacentText(position, text) — создаёт текстовый узел из строки text и вставляет его в указанное место относительно elem.
