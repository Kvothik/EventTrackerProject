package com.skilldistillery.eventtracker.services;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.Movie;

@Transactional
@Service
public class MovieServiceImpl implements MovieService {

	@PersistenceContext
	private EntityManager em;

	@Override
	public Movie updateMovie(int id, Movie movie) {
		Movie movieUpdate = em.find(Movie.class, movie.getId());
		movieUpdate.setTitle(movie.getTitle());
		movieUpdate.setCast(movie.getCast());
		movieUpdate.setDescription(movie.getDescription());
		movieUpdate.setDirector(movie.getDirector());
		movieUpdate.setImgUrl(movie.getImgUrl());
		movieUpdate.setLength(movie.getLength());
		movieUpdate.setRating(movie.getRating());
		movieUpdate.setReleaseDate(movie.getReleaseDate());
		movieUpdate.setTrailer(movie.getTrailer());
		movieUpdate.setType(movie.getType());
		em.persist(movieUpdate);
		em.flush();
		return movieUpdate;
	}

}
