package com.skilldistillery.eventtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.UserBeer;

public interface UserBeerRepository extends JpaRepository<UserBeer, Integer>{

}
