const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();

	const formElements = event.currentTarget.elements;
	const email = formElements.email.value;
	const password = formElements.password.value;

	if (email === '' || password === '') {
		return alert('Все поля обязательны к заполнению!');
	}
	const data = {
		email,
		password,
	};

	event.currentTarget.reset();
	console.log(data);
}
