# EventTrackerProject

### New Movie Tracker

#### Skill Distillery Assignment

Course began: 9 September 2019
Assigned: 27 November 2019
Completed: 29 November 2019

## Purpose

This is the backend for a soon to be full-stack application to track upcoming movies. The backend was created using RestAPI/JSON/Spring data JPA/Spring Boot/Hibernate/Gradle.

## Return Type	Route	Functionality
| Return Type   | Map Type | Path                        | Description                      |
| ------------- | -------- | --------------------------- | -------------------------------- |
| List Movies   | GET      | api/movie/search            | Gets all movies                  |
| List Movies  	| GET      | api/movie/search/{keyword}  | Gets movies by keyword           |
| Movie	        | GET      | api/movie/search/{id}        |	Gets one movie by id            |
| Movie	        | POST     | api/movie	                 | Creates a new movie              |
| Movie	        | PUT      | api/movie/{id}	             | Replaces an existing movie by id |
| Boolean	      | DELETE   | api/movie/{id}	             | Deletes an existing movie by id  |
|List Movies    |GET       | api/movie/search/inTheatres | Gets movies in theatres          |
|List Movies    |GET       | api/movie/search/comingSoon | Gets movies coming soon          |
