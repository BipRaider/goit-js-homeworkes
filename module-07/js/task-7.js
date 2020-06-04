'use strict';

const inputEvent1 = document.querySelector('#font-size-control');
const textInSpan = document.querySelector('#textTask7');

inputEvent1.addEventListener('input', (keyup) => even1(keyup, textInSpan)); //при передвижении ползунка сразу меняются значения

function even1(keyup, elem) {
	//`${keyup.target.value}px`
	elem.style.fontSize = keyup.target.value + 'px';
}
//inputEvent1.addEventListener('change', (keyup) => even1(keyup, textInSpan));// при измене
// inputEvent1.addEventListener('oninput', (keyup) => even1(keyup, textInSpan));
// inputEvent1.addEventListener('onchange', (keyup) => even1(keyup, textInSpan));
// inputEvent1.addEventListener('mouseup', (keyup) => even1(keyup, textInSpan));
//inputEvent1.addEventListener('onmouseup', (keyup) => even1(keyup, textInSpan));
// inputEvent1.addEventListener('click', (keyup) => even1(keyup, textInSpan));// при нажатий

// // ====================test 3 ===============
// $(document).ready(function() {
// 	$('.scrolling').on('scroll', function(event) {
// 		var scroll_img_opacity = $(this).scrollLeft() / 100;
// 		$('.scroll_img').css({ opacity: scroll_img_opacity });
// 	});
// });
// // ====================test 4 ===============

// let onChange = function() {
// 	let range = document.getElementById('Range');
// 	document.getElementById('Wrapper').style.width = range.value + 'px';
// 	document.getElementById('Window_size').innerHTML = range.value;
// };

// document.getElementById('Range').addEventListener('input', function() {
// 	onChange();
// });
