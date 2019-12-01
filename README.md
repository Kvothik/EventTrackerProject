# EventTrackerProject

## Purpose
This is the backend for a soon to be full-stack application to track upcoming movies. The backend was created using Restful API/JSON/JPA/Spring Boot/Hibernate/Gradle
## Return Type	Route	Functionality
| Return Type   | Map Type | Path                | Description                      |
| ------------- | -------- | ------------------- | -------------------------------- |
| List Movies   | GET      | api/movie           | Gets all movies                  |
| List Movies  	| GET      | api/movie/{keyword} | Gets movies by keyword           |
| Movie	        | GET      | api/movie/{id}      |	Gets one movie by id            |
| Movie	        | POST     | api/movie	         | Creates a new movie              |
| Movie	        | PUT      | api/movie/{id}	     | Replaces an existing movie by id |
| Boolean	      | DELETE   | api/movie/{id}	     | Deletes an existing movie by id  |
