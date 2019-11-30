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

import com.skilldistillery.eventtracker.entities.Beer;
import com.skilldistillery.eventtracker.repositories.BeerRepository;
import com.skilldistillery.eventtracker.services.BeerService;

@RestController
@RequestMapping("api")
public class BeerController {

	@Autowired
	private BeerService svc;

	@Autowired
	private BeerRepository repo;

	@GetMapping("beer/search")
	public List<Beer> getAll() {
		return repo.findAll();
	}

	@GetMapping("beer/search/{keyword}")
	public List<Beer> getByKeyword(@PathVariable String keyword) {
		return repo.findByNameOrStyle(keyword, keyword);
	}

	@PostMapping("beer")
	public Beer createBeer(@RequestBody Beer beer, HttpServletResponse resp, HttpServletRequest req) {
		try {
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(beer.getId());
			resp.addHeader("Location", url.toString());
			return repo.saveAndFlush(beer);
		} catch (Exception e) {
			resp.setStatus(400);
			e.printStackTrace();
			return null;
		}
	}

	@DeleteMapping("beer/{id}")
	public void deleteBeer(@PathVariable int id, HttpServletResponse resp) {
		try {
			Optional<Beer> opt = repo.findById(id);
			if (opt.isPresent()) {
				Beer beer = opt.get();
				repo.delete(beer);
				resp.setStatus(204);
			}
		} catch (Exception e) {
			resp.setStatus(404);
			e.printStackTrace();
		}
	}

	@PutMapping("beer/{id}")
	public Beer updateBeer(@RequestBody Beer beer, @PathVariable int id, HttpServletResponse resp) {
		Beer beerUpdate;
		try {
			beerUpdate = svc.updateBeer(id, beer);
			if (beer == null) {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			resp.setStatus(400);
			beerUpdate = null;
			e.printStackTrace();
		}
		return beerUpdate;
	}
}
