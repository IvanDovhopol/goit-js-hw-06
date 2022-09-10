const refs = {
	input: document.querySelector('#font-size-control'),
	output: document.querySelector('#text'),
};

refs.input.addEventListener('input', onChangeSize);

function onChangeSize(event) {
	refs.output.style.fontSize = `${event.currentTarget.value}px`;
	console.log('event.currentTarget.value:', event.currentTarget.value + 'px');
}
