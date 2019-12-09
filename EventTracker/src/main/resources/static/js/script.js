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

				var details = document.createElement("BUTTON");
				details.textContent = 'View Film Details';
				miscUl.appendChild(details);
				var movieId = v.id;
				details.addEventListener('click', function(e){
					sessionStorage.setItem("movieId", movieId);
					location.href = "details.html";
				});
				
				var update = document.createElement("BUTTON");
				update.textContent = 'Update';
				var movieId = v.id;
				miscUl.appendChild(update);
				update.addEventListener('click', function(e){
					sessionStorage.setItem("movieId", movieId);
					location.href = "update.html";
				});
				
				var deleteButton = document.createElement("BUTTON");
				deleteButton.textContent = 'Delete';
				var movieId = v.id;
				miscUl.appendChild(deleteButton);
				deleteButton.addEventListener('click', function(e){
					sessionStorage.setItem("movieId", movieId);
					location.href = "delete.html";
				});
				
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

				var details = document.createElement("BUTTON");
				details.textContent = 'View Film Details';
				miscUl.appendChild(details);
				var movieId = v.id;
				details.addEventListener('click', function(e){
					sessionStorage.setItem("movieId", movieId);
					location.href = "details.html";
				});
				
				var update = document.createElement("BUTTON");
				update.textContent = 'Update';
				var movieId = v.id;
				miscUl.appendChild(update);
				update.addEventListener('click', function(e){
					sessionStorage.setItem("movieId", movieId);
					location.href = "update.html";
				});
				
				var deleteButton = document.createElement("BUTTON");
				deleteButton.textContent = 'Delete';
				var movieId = v.id;
				miscUl.appendChild(deleteButton);
				deleteButton.addEventListener('click', function(e){
					sessionStorage.setItem("movieId", movieId);
					location.href = "delete.html";
				});
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

function createMovie() {

	let thisButtonsForm = document.addFilm;
	console.log(thisButtonsForm);
	var xhr = new XMLHttpRequest();
	// request body

	xhr.open("POST", 'api/movie', true);
	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON

	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4 && xhr.status < 400) {
			var movieObject = JSON.parse(xhr.responseText);

		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
		}

	};
	
	
	var movieObject = {
		title : thisButtonsForm.title.value,
		description : thisButtonsForm.description.value,
		releaseDate : thisButtonsForm.releaseDate.value,
		rating : thisButtonsForm.rating.value,
		length : thisButtonsForm.length.value,
		type : thisButtonsForm.type.value,
		trailer : thisButtonsForm.trailer.value,
		director : thisButtonsForm.director.value,
		cast : thisButtonsForm.cast.value,
		imgUrl : thisButtonsForm.imgUrl.value
	};
	var movieObjectJson = JSON.stringify(movieObject); // Convert JS object to
	// JSON string
	xhr.send(movieObjectJson);
}

function updateMovie(id) {
	
	let thisButtonsForm = document.addFilm;
	console.log(thisButtonsForm);
	var xhr = new XMLHttpRequest();
	// request body
	
	xhr.open("PUT", 'api/movie' + id, true);
	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON
	
	xhr.onreadystatechange = function() {
		
		if (xhr.readyState === 4 && xhr.status < 400) {
			var movieObject = JSON.parse(xhr.responseText);
			
		}
		
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
		}
		
	};
	
	
	var movieObject = {
			title : thisButtonsForm.title.value,
			description : thisButtonsForm.description.value,
			releaseDate : thisButtonsForm.releaseDate.value,
			rating : thisButtonsForm.rating.value,
			length : thisButtonsForm.length.value,
			type : thisButtonsForm.type.value,
			trailer : thisButtonsForm.trailer.value,
			director : thisButtonsForm.director.value,
			cast : thisButtonsForm.cast.value,
			imgUrl : thisButtonsForm.imgUrl.value
	};
	var movieObjectJson = JSON.stringify(movieObject); // Convert JS object to
	// JSON string
	xhr.send(movieObjectJson);
}
