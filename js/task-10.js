const refs = {
	controls: document.querySelector('#controls'),
	input: controls.querySelector('#controls input'),
	btnCreate: controls.querySelector('[data-create]'),
	btnDestroy: controls.querySelector('[data-destroy]'),
	output: document.querySelector('#boxes'),
};

refs.btnCreate.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes() {
	const boxes = [];

	for (let i = 1; i <= refs.input.value; i += 1) {
		const markup = `<div class="box" style="background-color: ${getRandomHexColor()}; width: ${
			20 + i * 10
		}px; height: ${
			20 + i * 10
		}px; outline: 1px solid ${getRandomHexColor()}"></div>`;

		boxes.push(markup);
	}

	refs.output.innerHTML = boxes.join('');
}

function destroyBoxes() {
	const boxes = refs.output.querySelectorAll('.box');

	for (const box of boxes) {
		box.remove();
	}
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
