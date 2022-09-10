//
//  ====== НЕ ОКОНЧЕНО, запутался, пока можно не проверять =================

const refs = {
	input: document.querySelector('#controls input'),
	btnCreate: document.querySelector('[data-create]'),
	btnDestroy: document.querySelector('[data-destroy]'),
	output: document.querySelector('#boxes'),
};

refs.input.addEventListener('input', onInputPresentValue);
refs.btnCreate.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', destroyBoxes);

const murkupBoxes = [];

function onInputPresentValue(event) {
	console.log('value', event.currentTarget.value);
	return event.currentTarget.value;
}

function createBoxes() {
	for (let i = 1; i <= refs.input.value; i += 1) {
		const markup = `<div class="box" style="background-color: ${getRandomHexColor()}; width: ${
			20 + i * 10
		}px; height: ${20 + i * 10}px"></div>`;

		murkupBoxes.push(markup);
		console.log('markup :>> ', markup);
		console.log('murkupBoxes :>> ', murkupBoxes);
	}

	refs.output.innerHTML = murkupBoxes.join('');
	// refs.input.value = 0;
}

function destroyBoxes() {
	// console.log;
	// refs.output.parentNode.children[3].childNodes.forEach(a => a.remove());
	// console.log(refs.output.parentNode.children[3].childNodes);
	// refs.output.parentNode.children[3].childNodes.forEach(a => a.remove());
	// refs.output.parentNode.removeChild(refs.output);

	// const boxes = refs.output.querySelectorAll('.box');
	const boxes = refs.output.parentNode.children[3].childNodes;

	for (const box of boxes) {
		box.remove();
	}

	// refs.input.value = 0;
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
