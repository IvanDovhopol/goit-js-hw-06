const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
	const itemsEl = document.createElement('li');

	itemsEl.textContent = ingredient;
	itemsEl.classList.add('item');
	console.log(itemsEl);

	return itemsEl;
});

ingredientsRef.append(...elements);
