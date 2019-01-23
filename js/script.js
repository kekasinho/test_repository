window.onload = function () {

	const iconSearch = document.querySelector('.icons__search');
	const body = document.querySelector('body');

	iconSearch.addEventListener('click', function (event) {
		event.stopPropagation();
		this.classList.add('icons__search--active');
	});
	body.addEventListener('click', function (event) {
		iconSearch.classList.remove('icons__search--active');
	})

};
