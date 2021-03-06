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

class MovieTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Movie movie;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("moviePU");

	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		movie = em.find(Movie.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		movie = null;
	}
	@Test
	void test() {
		assertEquals("Star Wars: The Rise of Skywalker", movie.getTitle());
	}

}
