const categoriesRef = document.querySelector('#categories');

const categoriesItemsRef = categoriesRef.querySelectorAll('.item');
console.log('Number of categories:', categoriesItemsRef.length);

categoriesItemsRef.forEach(item => {
	const titleRef = item.querySelector('h2');
	console.log('Category:', titleRef.textContent);

	const itemsListRef = item.querySelectorAll('li');
	console.log('Elements:', itemsListRef.length);
});
