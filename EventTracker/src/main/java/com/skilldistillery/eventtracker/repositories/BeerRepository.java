package com.skilldistillery.eventtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Beer;

public interface BeerRepository extends JpaRepository<Beer, Integer>{

}
