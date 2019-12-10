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
				details.addEventListener('click', function(e) {
					sessionStorage.setItem("movieId", movieId);
					location.href = "details.html";
				});

				var update = document.createElement("BUTTON");
				update.textContent = 'Update';
				miscUl.appendChild(update);
				update.addEventListener('click', function(e) {
					var updateForm = document.createElement('form');
					let updateTitle = document.createElement('input');
					updateTitle.type = 'text';
					updateTitle.value = v.title;
					updateTitle.name = 'title';
					updateForm.appendChild(updateTitle);
					let updateLength = document.createElement('input');
					updateLength.type = 'text';
					updateLength.value = v.length;
					updateLength.name = 'length';
					updateForm.appendChild(updateLength);
					let updateRating = document.createElement('input');
					updateRating.type = 'text';
					updateRating.value = v.rating;
					updateRating.name = 'rating';
					updateForm.appendChild(updateRating);
					let updateType = document.createElement('input');
					updateType.type = 'text';
					updateType.value = v.type;
					updateType.name = 'type';
					updateForm.appendChild(updateType);
					let updateDesc = document.createElement('input');
					updateDesc.type = 'text';
					updateDesc.value = v.description;
					updateDesc.name = 'description';
					updateForm.appendChild(updateDesc);
					let updateTrailer = document.createElement('input');
					updateTrailer.type = 'text';
					updateTrailer.value = v.trailer;
					updateTrailer.name = 'trailer';
					updateForm.appendChild(updateTrailer);
					let updateDirector = document.createElement('input');
					updateDirector.type = 'text';
					updateDirector.value = v.director;
					updateDirector.name = 'director';
					updateForm.appendChild(updateDirector);
					let updateCast = document.createElement('input');
					updateCast.type = 'text';
					updateCast.value = v.cast;
					updateCast.name = 'cast';
					updateForm.appendChild(updateCast);
					let updateReleaseDate = document.createElement('input');
					updateReleaseDate.type = 'text';
					updateReleaseDate.value = v.releaseDate;
					updateReleaseDate.name = 'releaseDate';
					updateForm.appendChild(updateReleaseDate);
					let updateImgUrl = document.createElement('input');
					updateImgUrl.type = 'text';
					updateImgUrl.value = v.imgUrl;
					updateImgUrl.name = 'imgUrl';
					updateForm.appendChild(updateImgUrl);
					let updateSubmit = document.createElement('button');
					updateSubmit.textContent = 'Submit Update';
					updateSubmit.name = 'submit';
					updateSubmit.addEventListener('click', function(e) {
						e.preventDefault();

						updateMovie(v.id, updateTitle.value,
								updateLength.value, updateRating.value,
								updateType.value, updateDesc.value,
								updateTrailer.value, updateDirector.value,
								updateCast.value, updateReleaseDate.value,
								updateImgUrl.value);
						inTheatres.textContent = "";
						findInTheatres();
					});
					updateForm.appendChild(updateSubmit);
					miscUl.appendChild(updateForm);

				});

				var deleteButton = document.createElement("BUTTON");
				deleteButton.textContent = 'Delete';
				var movieId = v.id;
				var deleteButton = document.createElement("BUTTON");
				deleteButton.textContent = 'Delete';
				var deleteButton = document.createElement("BUTTON");
				deleteButton.textContent = 'Delete';
				deleteButton.addEventListener('click', function(e){
					e.preventDefault();
					deleteMovie(v.id);
				});
				miscUl.appendChild(deleteButton);

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
				details.addEventListener('click', function(e) {
					sessionStorage.setItem("movieId", movieId);
					location.href = "details.html";
				});

				var update = document.createElement("BUTTON");
				update.textContent = 'Update';
				miscUl.appendChild(update);
				update.addEventListener('click', function(e) {
					var updateForm = document.createElement('form');
					let updateTitle = document.createElement('input');
					updateTitle.type = 'text';
					updateTitle.value = v.title;
					updateTitle.name = 'title';
					updateForm.appendChild(updateTitle);
					let updateLength = document.createElement('input');
					updateLength.type = 'text';
					updateLength.value = v.length;
					updateLength.name = 'length';
					updateForm.appendChild(updateLength);
					let updateRating = document.createElement('input');
					updateRating.type = 'text';
					updateRating.value = v.rating;
					updateRating.name = 'rating';
					updateForm.appendChild(updateRating);
					let updateType = document.createElement('input');
					updateType.type = 'text';
					updateType.value = v.type;
					updateType.name = 'type';
					updateForm.appendChild(updateType);
					let updateDesc = document.createElement('input');
					updateDesc.type = 'text';
					updateDesc.value = v.description;
					updateDesc.name = 'description';
					updateForm.appendChild(updateDesc);
					let updateTrailer = document.createElement('input');
					updateTrailer.type = 'text';
					updateTrailer.value = v.trailer;
					updateTrailer.name = 'trailer';
					updateForm.appendChild(updateTrailer);
					let updateDirector = document.createElement('input');
					updateDirector.type = 'text';
					updateDirector.value = v.director;
					updateDirector.name = 'director';
					updateForm.appendChild(updateDirector);
					let updateCast = document.createElement('input');
					updateCast.type = 'text';
					updateCast.value = v.cast;
					updateCast.name = 'cast';
					updateForm.appendChild(updateCast);
					let updateReleaseDate = document.createElement('input');
					updateReleaseDate.type = 'text';
					updateReleaseDate.value = v.releaseDate;
					updateReleaseDate.name = 'releaseDate';
					updateForm.appendChild(updateReleaseDate);
					let updateImgUrl = document.createElement('input');
					updateImgUrl.type = 'text';
					updateImgUrl.value = v.imgUrl;
					updateImgUrl.name = 'imgUrl';
					updateForm.appendChild(updateImgUrl);
					let updateSubmit = document.createElement('button');
					updateSubmit.textContent = 'Submit Update';
					updateSubmit.name = 'submit';
					updateSubmit.addEventListener('click', function(e) {
						e.preventDefault();
						updateMovie(v.id, updateTitle.value,
								updateLength.value, updateRating.value,
								updateType.value, updateDesc.value,
								updateTrailer.value, updateDirector.value,
								updateCast.value, updateReleaseDate.value,
								updateImgUrl.value);
						comingSoon.textContent = "";
						findComingSoon();
					});
					updateForm.appendChild(updateSubmit);
					miscUl.appendChild(updateForm);
				});

				var deleteButton = document.createElement("BUTTON");
				deleteButton.textContent = 'Delete';
				var movieId = v.id;
				var deleteButton = document.createElement("BUTTON");
				deleteButton.textContent = 'Delete';
				deleteButton.addEventListener('click', function(e){
					e.preventDefault();
					deleteMovie(v.id);
				});
				miscUl.appendChild(deleteButton);
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

				var details = document.createElement("BUTTON");
				details.textContent = 'View Film Details';
				miscUl.appendChild(details);
				var movieId = v.id;
				details.addEventListener('click', function(e) {
					sessionStorage.setItem("movieId", movieId);
					location.href = "details.html";
				});

				var update = document.createElement("BUTTON");
				update.textContent = 'Update';
				miscUl.appendChild(update);
				update.addEventListener('click', function(e) {
					var updateForm = document.createElement('form');
					let updateTitle = document.createElement('input');
					updateTitle.type = 'text';
					updateTitle.value = v.title;
					updateTitle.name = 'title';
					updateForm.appendChild(updateTitle);
					let updateLength = document.createElement('input');
					updateLength.type = 'text';
					updateLength.value = v.length;
					updateLength.name = 'length';
					updateForm.appendChild(updateLength);
					let updateRating = document.createElement('input');
					updateRating.type = 'text';
					updateRating.value = v.rating;
					updateRating.name = 'rating';
					updateForm.appendChild(updateRating);
					let updateType = document.createElement('input');
					updateType.type = 'text';
					updateType.value = v.type;
					updateType.name = 'type';
					updateForm.appendChild(updateType);
					let updateDesc = document.createElement('input');
					updateDesc.type = 'text';
					updateDesc.value = v.description;
					updateDesc.name = 'description';
					updateForm.appendChild(updateDesc);
					let updateTrailer = document.createElement('input');
					updateTrailer.type = 'text';
					updateTrailer.value = v.trailer;
					updateTrailer.name = 'trailer';
					updateForm.appendChild(updateTrailer);
					let updateDirector = document.createElement('input');
					updateDirector.type = 'text';
					updateDirector.value = v.director;
					updateDirector.name = 'director';
					updateForm.appendChild(updateDirector);
					let updateCast = document.createElement('input');
					updateCast.type = 'text';
					updateCast.value = v.cast;
					updateCast.name = 'cast';
					updateForm.appendChild(updateCast);
					let updateReleaseDate = document.createElement('input');
					updateReleaseDate.type = 'text';
					updateReleaseDate.value = v.releaseDate;
					updateReleaseDate.name = 'releaseDate';
					updateForm.appendChild(updateReleaseDate);
					let updateImgUrl = document.createElement('input');
					updateImgUrl.type = 'text';
					updateImgUrl.value = v.imgUrl;
					updateImgUrl.name = 'imgUrl';
					let updateSubmit = document.createElement('button');
					updateSubmit.textContent = 'Submit Update';
					updateSubmit.name = 'submit';
					updateSubmit.addEventListener('click', function(e) {
						e.preventDefault();
						updateMovie(v.id, updateTitle.value,
								updateLength.value, updateRating.value,
								updateType.value, updateDesc.value,
								updateTrailer.value, updateDirector.value,
								updateCast.value, updateReleaseDate.value,
								updateImgUrl.value);
						searchDiv.textContent = "";
						searchMovie(keyword);
					});
					updateForm.appendChild(updateSubmit);
					miscUl.appendChild(updateForm);

				});

				var deleteButton = document.createElement("BUTTON");
				deleteButton.textContent = 'Delete';
				deleteButton.addEventListener('click', function(e){
					e.preventDefault();
					deleteMovie(v.id);
				});
				miscUl.appendChild(deleteButton);

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

function updateMovie(id, title, length, rating, type, desc, trailer, director,
		cast, date, image) {
	console.log(id);
	console.log(title + " " + length + " " + rating + " " + type + " " + desc
			+ " " + trailer + " " + director + " " + cast + " " + date + " "
			+ image);
	// let thisButtonsForm = document.addFilm;
	// console.log(thisButtonsForm);
	var xhr = new XMLHttpRequest();
	// request body

	xhr.open("PUT", 'api/movie/' + id, true);
	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON

	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) {
				var movieObject = JSON.parse(xhr.responseText);

			}
		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
		}

	};

	var movieObject = {
		id : id,
		title : title,
		description : desc,
		releaseDate : date,
		rating : rating,
		length : length,
		type : type,
		trailer : trailer,
		director : director,
		cast : cast,
		imgUrl : image
	};
	var movieObjectJson = JSON.stringify(movieObject); // Convert JS object to
	// JSON string
	xhr.send(movieObjectJson);
	console.log(movieObjectJson);
}

function deleteMovie(id) {

	var xhr = new XMLHttpRequest();

	xhr.open("DELETE", 'api/movie/' + id);

	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) {

			}
		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
		}

	};
	xhr.send(id);
}

