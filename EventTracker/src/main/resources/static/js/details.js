window.addEventListener('load', function(e) {
	console.log('Document Loaded');
	init();
});

function init() {

	var details = document.getElementById('movieDetails');
	movieDetails(id);

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

function movieDetails(id) {

	var xhr = new XMLHttpRequest();

	xhr.open("GET", 'api/movie/' + id, true);

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
				details.addEventListener('click', function(e){
					location.href = "details.html";
				});
				
				var update = document.createElement("BUTTON");
				update.textContent = 'Update';
				miscUl.appendChild(update);
				update.addEventListener('click', function(e){
					location.href = "update.html";
				});
				
				var deleteButton = document.createElement("BUTTON");
				deleteButton.textContent = 'Delete';
				miscUl.appendChild(deleteButton);
				deleteButton.addEventListener('click', function(e){
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