package com.skilldistillery.eventtracker.controllers;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.User;
import com.skilldistillery.eventtracker.repositories.UserRepository;
import com.skilldistillery.eventtracker.services.UserService;

@RestController
@RequestMapping("api")
public class UserController {
	@Autowired
	private UserService svc;

	@Autowired
	private UserRepository repo;

	@PostMapping("user")
	public User createUser(@RequestBody User user, HttpServletResponse resp, HttpServletRequest req, Errors errors,
			HttpSession session) {
		svc.addUserToMap();
		if (errors.hasErrors()) {
			resp.setStatus(400);
			return null;
		} else if (!svc.isEmailUnique(user.getEmail())) {
			resp.setStatus(400);
			errors.rejectValue("email", "error.email", "Email already in use");
			return null;
		} else {
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(user.getId());
			resp.addHeader("Location", url.toString());
			session.setAttribute("loggedInUser", user);
			return repo.saveAndFlush(user);
		}
	}

	@DeleteMapping("user/{id}")
	public void deleteUser(@PathVariable int id, HttpServletResponse resp) {
		try {
			Optional<User> opt = repo.findById(id);
			if (opt.isPresent()) {
				User user = opt.get();
				repo.delete(user);
				resp.setStatus(204);
			}
		} catch (Exception e) {
			resp.setStatus(404);
			e.printStackTrace();
		}
	}

	@PutMapping("user/{id}")
	public User updateUser(@RequestBody User user, @PathVariable int id, HttpServletResponse resp) {
		User userUpdate;
		try {
			userUpdate = svc.updateUser(id, user);
			if (user == null) {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			resp.setStatus(400);
			userUpdate = null;
			e.printStackTrace();
		}
		return userUpdate;
	}
}
