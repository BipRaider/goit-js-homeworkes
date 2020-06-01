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
//Находим класс к которому добавить ,задаём куда добавлять ,указываем массив img что надо добавить
const addImagInGalleryTest2 = (findElem, addWhere, array) => {
	return array.forEach((image) =>
		document
			.querySelector(findElem)
			.insertAdjacentHTML(addWhere, creadLiTest2('js-gallery__box', creadImgTest2('js-img', image)))
	);
};

addImagInGalleryTest2('.gallery', 'beforeend', images); // внутрь element, в самый конец контента
addImagInGalleryTest2('.gallery', 'afterend', images); //после element
addImagInGalleryTest2('.gallery', 'beforebegin', images); //перед element
addImagInGalleryTest2('.gallery', 'afterbegin', images); //внутрь element, в самое начало контента
// ===========================
