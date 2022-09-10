const inputRef = document.querySelector('#validation-input');
const inputLength = inputRef.getAttribute('data-length');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
	const isValidLength = event.currentTarget.value.length >= Number(inputLength);

	if (isValidLength) {
		inputRef.classList.add('valid');
		inputRef.classList.remove('invalid');
	} else {
		inputRef.classList.add('invalid');
		inputRef.classList.remove('valid');
	}
}
