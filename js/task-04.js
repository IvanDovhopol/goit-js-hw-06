let counterValue = {
	value: 0,

	increment() {
		this.value += 1;
	},

	decrement() {
		this.value -= 1;
	},
};

const btnIncrementRef = document.querySelector('[data-action="increment"]');
const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector('#value');

btnIncrementRef.addEventListener('click', () => {
	counterValue.increment();
	valueRef.textContent = counterValue.value;
});

btnDecrementRef.addEventListener('click', () => {
	counterValue.decrement();
	valueRef.textContent = counterValue.value;
});
