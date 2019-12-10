window.addEventListener('load', function(e) {
	console.log('Document Loaded');
	init();
});

function init() {

	var movieId = sessionStorage.getItem("movieId");
	
	var updateDiv = document.getElementById('movieUpdate');
	updateMovie(movieId);

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

function updateMovie(id){
	 
		var details = document.getElementById('movieDetails');
	var xhr = new XMLHttpRequest();
	
	xhr.open("PUT", 'api/movie/' + movieId, true);

	xhr.onreadystatechange = function() {
		
		if (xhr.readyState === 4 && xhr.status < 400) {
			var movieObject = JSON.parse(xhr.responseText);
			console.log(movieObject);

			updateDiv.update.title.value = movieObject.title;
			
				let titleH1 = document.createElement('h1');
				details.appendChild(titleH1);
				titleH1.textContent = movieObject.title;

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
				var movieId = movieObject.id;
				miscUl.appendChild(update);
				update.addEventListener('click', function(e){
					sessionStorage.setItem("movieId", movieId);
					location.href = "update.html";
				});
				
				var deleteButton = document.createElement("BUTTON");
				deleteButton.textContent = 'Delete';
				var movieId = movieObject.id;
				miscUl.appendChild(deleteButton);
				deleteButton.addEventListener('click', function(e){
					sessionStorage.setItem("movieId", movieId);
					location.href = "delete.html";
				});
				
			}

		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
		}

		xhr.send(null);
}