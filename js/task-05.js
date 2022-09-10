const refs = {
	input: document.querySelector('#name-input'),
	output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', event => {
	const DEFAULT_VALUE = 'Anonymous';

	if (event.currentTarget.value === '') {
		refs.output.textContent = DEFAULT_VALUE;
	} else {
		refs.output.textContent = event.currentTarget.value;
	}
});
