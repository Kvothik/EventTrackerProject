package com.skilldistillery.eventtracker.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.repositories.BeerRepository;

@Service
public class BeerServiceImpl implements BeerService {

	@Autowired
	private BeerRepository repo;
}
