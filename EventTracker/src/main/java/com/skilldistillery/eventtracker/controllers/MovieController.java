package com.skilldistillery.eventtracker.controllers;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.Movie;
import com.skilldistillery.eventtracker.repositories.MovieRepository;
import com.skilldistillery.eventtracker.services.MovieService;

@RestController
@RequestMapping("api")
public class MovieController {

	@Autowired
	private MovieService svc;

	@Autowired
	private MovieRepository repo;

	@GetMapping("movie/search")
	public List<Movie> getAll() {
		return repo.findAll();
	}

	@GetMapping("movie/search/{keyword}")
	public List<Movie> getByTitle(@PathVariable String keyword) {
		return repo.queryByTitle(keyword);
	}

	@PostMapping("movie")
	public Movie createMovie(@RequestBody Movie movie, HttpServletResponse resp, HttpServletRequest req) {
		try {
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(movie.getId());
			resp.addHeader("Location", url.toString());
			return repo.saveAndFlush(movie);
		} catch (Exception e) {
			resp.setStatus(400);
			e.printStackTrace();
			return null;
		}
	}

	@DeleteMapping("movie/{id}")
	public void deleteMovie(@PathVariable int id, HttpServletResponse resp) {
		try {
			Optional<Movie> opt = repo.findById(id);
			if (opt.isPresent()) {
				Movie movie = opt.get();
				repo.delete(movie);
				resp.setStatus(204);
			}
		} catch (Exception e) {
			resp.setStatus(404);
			e.printStackTrace();
		}
	}
 
	@PutMapping("movie/{id}")
	public Movie updateMovie(@RequestBody Movie movie, @PathVariable int id, HttpServletResponse resp) {
		Movie movieUpdate;
		try {
			movieUpdate = svc.updateMovie(id, movie);
			if (movie == null) {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			resp.setStatus(400);
			movieUpdate = null;
			e.printStackTrace();
		}
		return movieUpdate;
	}
}
