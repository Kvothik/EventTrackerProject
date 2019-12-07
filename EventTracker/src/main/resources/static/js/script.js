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
		// if (!isNaN(keyword)) {
		searchMovie(keyword);
		console.log(keyword);
		// } else {
		// let error = document.createElement('p');
		// error.textContent = 'No films found matching that title.';
		// error.style.color = 'red';
		// searchDiv.appendChild(error);
		// }
	});

	var submitButton = document.getElementById('submit');
	submitButton.addEventListener('click', function(e) {
		e.preventDefault();
		createFilm();
	});
}

function findInTheatres() {

	var xhr = new XMLHttpRequest();

	xhr.open("GET", 'api/movie/search/inTheatres', true);

	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4 && xhr.status < 400) {
			var movieObject = JSON.parse(xhr.responseText);
			console.log(movieObject);
			movieObject.forEach(function(v, i, a) {

				let titleH1 = document.createElement('h1');
				inTheatres.appendChild(titleH1);
				titleH1.textContent = v.title;

				let descriptionBq = document.createElement('blockquote');
				inTheatres.appendChild(descriptionBq);
				descriptionBq.textContent = v.description;

				let miscUl = document.createElement('ul');
				inTheatres.appendChild(miscUl);

				let ratingLi = document.createElement('li');
				miscUl.appendChild(ratingLi);
				ratingLi.textContent = 'Rating: ' + v.rating;

				let releaseYearLi = document.createElement('li');
				miscUl.appendChild(releaseYearLi);
				releaseYearLi.textContent = 'Release Year: ' + v.releaseDate;

				let lengthLi = document.createElement('li');
				miscUl.appendChild(lengthLi);
				lengthLi.textContent = 'Length: ' + v.length;

				let typeLi = document.createElement('li');
				miscUl.appendChild(typeLi);
				typeLi.textContent = 'Type: ' + v.type;

				let imageUrlLi = document.createElement('li');
				miscUl.appendChild(imageUrlLi);
				imageUrlLi.textContent = 'ImageUrl: ' + v.imgUrl;

				let directorLi = document.createElement('li');
				miscUl.appendChild(directorLi);
				directorLi.textContent = 'Director: ' + v.director;

				let castLi = document.createElement('li');
				miscUl.appendChild(castLi);
				castLi.textContent = 'Cast: ' + v.cast;

				let trailerLi = document.createElement('li');
				miscUl.appendChild(trailerLi);
				trailerLi.textContent = 'Trailer: ' + v.trailer;

			});

		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
		}

	};

	xhr.send(null);
}
function findComingSoon() {

	var xhr = new XMLHttpRequest();

	xhr.open("GET", 'api/movie/search/comingSoon', true);

	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4 && xhr.status < 400) {
			var movieObject = JSON.parse(xhr.responseText);
			console.log(movieObject);
			movieObject.forEach(function(v, i, a) {

				let titleH1 = document.createElement('h1');
				comingSoon.appendChild(titleH1);
				titleH1.textContent = v.title;

				let descriptionBq = document.createElement('blockquote');
				comingSoon.appendChild(descriptionBq);
				descriptionBq.textContent = v.description;

				let miscUl = document.createElement('ul');
				comingSoon.appendChild(miscUl);

				let ratingLi = document.createElement('li');
				miscUl.appendChild(ratingLi);
				ratingLi.textContent = 'Rating: ' + v.rating;

				let releaseYearLi = document.createElement('li');
				miscUl.appendChild(releaseYearLi);
				releaseYearLi.textContent = 'Release Year: ' + v.releaseDate;

				let lengthLi = document.createElement('li');
				miscUl.appendChild(lengthLi);
				lengthLi.textContent = 'Length: ' + v.length;

				let typeLi = document.createElement('li');
				miscUl.appendChild(typeLi);
				typeLi.textContent = 'Type: ' + v.type;

				let imageUrlLi = document.createElement('li');
				miscUl.appendChild(imageUrlLi);
				imageUrlLi.textContent = 'ImageUrl: ' + v.imgUrl;

				let directorLi = document.createElement('li');
				miscUl.appendChild(directorLi);
				directorLi.textContent = 'Director: ' + v.director;

				let castLi = document.createElement('li');
				miscUl.appendChild(castLi);
				castLi.textContent = 'Cast: ' + v.cast;

				let trailerLi = document.createElement('li');
				miscUl.appendChild(trailerLi);
				trailerLi.textContent = 'Trailer: ' + v.trailer;

			});

		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
		}

	};

	xhr.send(null);
}

function searchMovie(keyword) {

	var xhr = new XMLHttpRequest();

	xhr.open("GET", 'api/movie/search/' + keyword, true);

	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4 && xhr.status < 400) {
			var movieObject = JSON.parse(xhr.responseText);
			console.log(movieObject);

			movieObject.forEach(function(v, i, a) {

				let titleH1 = document.createElement('h1');
				comingSoon.appendChild(titleH1);
				titleH1.textContent = v.title;

				let descriptionBq = document.createElement('blockquote');
				comingSoon.appendChild(descriptionBq);
				descriptionBq.textContent = v.description;

				let miscUl = document.createElement('ul');
				comingSoon.appendChild(miscUl);

				let ratingLi = document.createElement('li');
				miscUl.appendChild(ratingLi);
				ratingLi.textContent = 'Rating: ' + v.rating;

				let releaseYearLi = document.createElement('li');
				miscUl.appendChild(releaseYearLi);
				releaseYearLi.textContent = 'Release Year: ' + v.releaseDate;

				let lengthLi = document.createElement('li');
				miscUl.appendChild(lengthLi);
				lengthLi.textContent = 'Length: ' + v.length;

				let typeLi = document.createElement('li');
				miscUl.appendChild(typeLi);
				typeLi.textContent = 'Type: ' + v.type;

				let imageUrlLi = document.createElement('li');
				miscUl.appendChild(imageUrlLi);
				imageUrlLi.textContent = 'ImageUrl: ' + v.imgUrl;

				let directorLi = document.createElement('li');
				miscUl.appendChild(directorLi);
				directorLi.textContent = 'Director: ' + v.director;

				let castLi = document.createElement('li');
				miscUl.appendChild(castLi);
				castLi.textContent = 'Cast: ' + v.cast;

				let trailerLi = document.createElement('li');
				miscUl.appendChild(trailerLi);
				trailerLi.textContent = 'Trailer: ' + v.trailer;

			});

		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
		}

	};

	xhr.send(null);
}
