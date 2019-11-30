package com.skilldistillery.eventtracker.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class UserBeerTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private UserBeer ub;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("beerPU");

	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		ub = em.find(UserBeer.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		ub = null;
	}
	@Test
	void test() {
		assertEquals("Kelly", ub.getUser().getFirstName());
//		assertEquals("Compass", ub.getBeer().getName());
		
	}

}
