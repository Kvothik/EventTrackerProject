package com.skilldistillery.eventtracker.services;


import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.Beer;

@Transactional
@Service
public class BeerServiceImpl implements BeerService {

	@PersistenceContext
	private EntityManager em;

	@Override
	public Beer updateBeer(int id, Beer beer) {
		Beer beerUpdate = em.find(Beer.class, id);
		beerUpdate.setName(beer.getName());
		beerUpdate.setStyle(beer.getStyle());
		beerUpdate.setImgUrl(beer.getBrewrey());
		beerUpdate.setAbv(beer.getAbv());
		beerUpdate.setBrewrey(beer.getBrewrey());
		beerUpdate.setIbu(beer.getIbu());
		em.persist(beer);
		em.flush();
		return beerUpdate;
	}

}
