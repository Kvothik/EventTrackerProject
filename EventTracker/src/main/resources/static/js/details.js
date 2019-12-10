window.addEventListener('load', function(e) {
	console.log('Document Loaded');
	init();
});

function init() {
	var movieId = sessionStorage.getItem("movieId");
	
	movieDetails(movieId);

}

function movieDetails(movieId) {
	var details = document.getElementById('movieDetails');
	var xhr = new XMLHttpRequest();
	
	xhr.open("GET", 'api/movie/' + movieId, true);

	xhr.onreadystatechange = function() {
		
		if (xhr.readyState === 4 && xhr.status < 400) {
			var movieObject = JSON.parse(xhr.responseText);
			console.log(movieObject);

				let titleH1 = document.createElement('h1');
				titleH1.textContent = movieObject.title;
				details.appendChild(titleH1);

				let descriptionBq = document.createElement('blockquote');
				details.appendChild(descriptionBq);
				descriptionBq.textContent = movieObject.description;

				let miscUl = document.createElement('ul');
				details.appendChild(miscUl);

				let ratingLi = document.createElement('li');
				miscUl.appendChild(ratingLi);
				ratingLi.textContent = 'Rating: ' + movieObject.rating;

				let releaseYearLi = document.createElement('li');
				miscUl.appendChild(releaseYearLi);
				releaseYearLi.textContent = 'Release Year: ' + movieObject.releaseDate;

				let lengthLi = document.createElement('li');
				miscUl.appendChild(lengthLi);
				lengthLi.textContent = 'Length: ' + movieObject.length;

				let typeLi = document.createElement('li');
				miscUl.appendChild(typeLi);
				typeLi.textContent = 'Type: ' + movieObject.type;

				let imageUrlLi = document.createElement('li');
				miscUl.appendChild(imageUrlLi);
				imageUrlLi.textContent = 'ImageUrl: ' + movieObject.imgUrl;

				let directorLi = document.createElement('li');
				miscUl.appendChild(directorLi);
				directorLi.textContent = 'Director: ' + movieObject.director;

				let castLi = document.createElement('li');
				miscUl.appendChild(castLi);
				castLi.textContent = 'Cast: ' + movieObject.cast;

				let trailerLi = document.createElement('li');
				miscUl.appendChild(trailerLi);
				trailerLi.textContent = 'Trailer: ' + movieObject.trailer;

				var home = document.createElement("BUTTON");
				home.textContent = 'Back Home';
				miscUl.appendChild(home);
				home.addEventListener('click', function(e){
					location.href = "index.html";
				});
				
				var update = document.createElement("BUTTON");
				update.textContent = 'Update';
				miscUl.appendChild(update);
				update.addEventListener('click', function(e) {
					var updateForm = document.createElement('form');
					let updateTitle = document.createElement('input');
					updateTitle.type = 'text';
					updateTitle.value = movieObject.title;
					updateTitle.name = 'title';
					updateForm.appendChild(updateTitle);
					let updateLength = document.createElement('input');
					updateLength.type = 'text';
					updateLength.value = movieObject.length;
					updateLength.name = 'length';
					updateForm.appendChild(updateLength);
					let updateRating = document.createElement('input');
					updateRating.type = 'text';
					updateRating.value = movieObject.rating;
					updateRating.name = 'rating';
					updateForm.appendChild(updateRating);
					let updateType = document.createElement('input');
					updateType.type = 'text';
					updateType.value = movieObject.type;
					updateType.name = 'type';
					updateForm.appendChild(updateType);
					let updateDesc = document.createElement('input');
					updateDesc.type = 'text';
					updateDesc.value = movieObject.description;
					updateDesc.name = 'description';
					updateForm.appendChild(updateDesc);
					let updateTrailer = document.createElement('input');
					updateTrailer.type = 'text';
					updateTrailer.value = movieObject.trailer;
					updateTrailer.name = 'trailer';
					updateForm.appendChild(updateTrailer);
					let updateDirector = document.createElement('input');
					updateDirector.type = 'text';
					updateDirector.value = movieObject.director;
					updateDirector.name = 'director';
					updateForm.appendChild(updateDirector);
					let updateCast = document.createElement('input');
					updateCast.type = 'text';
					updateCast.value = movieObject.cast;
					updateCast.name = 'cast';
					updateForm.appendChild(updateCast);
					let updateReleaseDate = document.createElement('input');
					updateReleaseDate.type = 'text';
					updateReleaseDate.value = movieObject.releaseDate;
					updateReleaseDate.name = 'releaseDate';
					updateForm.appendChild(updateReleaseDate);
					let updateImgUrl = document.createElement('input');
					updateImgUrl.type = 'text';
					updateImgUrl.value = movieObject.imgUrl;
					updateImgUrl.name = 'imgUrl';
					let updateSubmit = document.createElement('button');
					updateSubmit.textContent = 'Submit Update';
					updateSubmit.name = 'submit';
					updateSubmit.addEventListener('click', function(e) {
						e.preventDefault();
						updateMovie(movieObject.id, updateTitle.value,
								updateLength.value, updateRating.value,
								updateType.value, updateDesc.value,
								updateTrailer.value, updateDirector.value,
								updateCast.value, updateReleaseDate.value,
								updateImgUrl.value);
						details.textContent = "";
						movieDetails(movieId);
					});
					updateForm.appendChild(updateSubmit);
					miscUl.appendChild(updateForm);

				});
				
				var movieId = movieObject.id;
				var deleteButton = document.createElement("BUTTON");
				deleteButton.textContent = 'Delete';
				var deleteButton = document.createElement("BUTTON");
				deleteButton.textContent = 'Delete';
				var deleteButton = document.createElement("BUTTON");
				deleteButton.textContent = 'Delete';
				deleteButton.addEventListener('click', function(e){
					e.preventDefault();
					deleteMovie(movieObject.id);
				});
				miscUl.appendChild(deleteButton);
				
			}

		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
		}

		xhr.send(null);
	}

function updateMovie(id, title, length, rating, type, desc, trailer, director,
		cast, date, image) {
	console.log(id);
	console.log(title + " " + length + " " + rating + " " + type + " " + desc
			+ " " + trailer + " " + director + " " + cast + " " + date + " "
			+ image);
	var xhr = new XMLHttpRequest();

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