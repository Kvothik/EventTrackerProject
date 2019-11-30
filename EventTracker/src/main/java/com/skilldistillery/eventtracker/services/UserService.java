package com.skilldistillery.eventtracker.services;

import com.skilldistillery.eventtracker.entities.User;

public interface UserService {

	User updateUser(int id, User user);

	boolean isEmailUnique(String email);

	boolean isUserNameUnique(String username);

	void addUserToMap();

}
