package com.skilldistillery.eventtracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Beer;

public interface BeerRepository extends JpaRepository<Beer, Integer>{
	List<Beer> findByNameOrStyle(String name, String style);
	List<Beer> findAll();
}
