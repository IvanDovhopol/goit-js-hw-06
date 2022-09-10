const refs = {
	window: document.querySelector('.widget'),
	textColor: document.querySelector('.color'),
	btnChangeColor: document.querySelector('.change-color'),
};

refs.btnChangeColor.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
	const randomHexColor = `#${Math.floor(Math.random() * 16777215).toString(
		16
	)}`;

	refs.textColor.textContent = randomHexColor;
	document.body.style.backgroundColor = randomHexColor;

	return randomHexColor;
}
