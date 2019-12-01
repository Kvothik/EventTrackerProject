package com.skilldistillery.eventtracker.services;

import com.skilldistillery.eventtracker.entities.Movie;

public interface MovieService {

	Movie updateMovie(int id, Movie beer);
}
