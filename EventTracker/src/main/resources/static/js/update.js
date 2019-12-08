window.addEventListener('load', function(e) {
	console.log('Document Loaded');
	init();
});

function init() {

	var inTheatres = document.getElementById('inTheatres');
	findInTheatres();

	var comingSoon = document.getElementById('comingSoon');
	findComingSoon();

	var searchDiv = document.getElementById('searchDiv');

	var lookup = document.getElementById('lookup');
	lookup.addEventListener('click', function(e) {
		e.preventDefault();
		var keyword = document.lookupForm.keyword.value;
		searchMovie(keyword);
		console.log(keyword);
	});

	var submitButton = document.getElementById('submit');
	submitButton.addEventListener('click', function(e) {
		e.preventDefault();
		createMovie();
	});
}