package com.skilldistillery.eventtracker.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.User;
import com.skilldistillery.eventtracker.repositories.UserRepository;

@Transactional
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository repo;

	@PersistenceContext
	private EntityManager em;

	private Map<String, User> users = new HashMap<>();

	@Override
	public boolean isEmailUnique(String email) {
		System.out.println(!users.containsKey(email));
		return !users.containsKey(email);
	}

	@Override
	public boolean isUserNameUnique(String username) {
		System.out.println(!users.containsKey(username));
		return !users.containsKey(username);
	}

	@Override
	public User updateUser(int id, User updatedUser) {
		User managedUser = em.find(User.class, id);

		managedUser.setFirstName(updatedUser.getFirstName());
		managedUser.setLastName(updatedUser.getLastName());
		managedUser.setEmail(updatedUser.getEmail());
		managedUser.setPassword(updatedUser.getPassword());
		managedUser.setImgUrl(updatedUser.getImgUrl());

		return managedUser;
	}

	@Override
	public void addUserToMap() {
		String jpql = "SELECT user from User user";
		List<User> result = em.createQuery(jpql, User.class).getResultList();
		System.err.println(result);
		for (int j = 0; j < result.size(); j++) {
			users.put(result.get(j).getEmail(), result.get(j));
			users.put(result.get(j).getFirstName(), result.get(j));

		}
	}

}
