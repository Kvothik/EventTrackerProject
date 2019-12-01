package com.skilldistillery.eventtracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.skilldistillery.eventtracker.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Integer>{
	List<Movie> findByTitle(String title);
	List<Movie> findAll();
	@Query("Select m from Movie m where m.title like :keyword")
	List<Movie> queryByTitle(@Param("keyword")String keyword);
	@Query("SELECT m FROM Movie m WHERE m.releaseDate > NOW()")
	List<Movie> queryByComingSoon();
	@Query("SELECT m FROM Movie m WHERE m.releaseDate < NOW()")
	List<Movie> queryByInTheatres();

}
