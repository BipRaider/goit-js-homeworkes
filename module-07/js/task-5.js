'use strict';
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output.
//  Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

{
	/* <input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1> */
}
const textInInput = document.querySelector('#name-input');
const textInspan = document.querySelector('#name-output');

textInInput.addEventListener('keyup', () => addText(textInspan, textInInput));
const addText = (startText, changeText) => {
	if (!changeText.value && startText.value === undefined) return (startText.textContent = 'Незнакомец');
	return (startText.textContent = changeText.value);
};
//https://developer.mozilla.org/ru/docs/Web/Events
//https://www.w3schools.com/jsref/dom_obj_event.asp
