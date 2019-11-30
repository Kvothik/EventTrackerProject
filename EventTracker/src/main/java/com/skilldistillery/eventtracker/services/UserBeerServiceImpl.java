package com.skilldistillery.eventtracker.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.repositories.UserBeerRepository;

@Service
public class UserBeerServiceImpl implements UserBeerService {

	@Autowired
	private UserBeerRepository repo;
}
