package com.ForLoops;

import java.util.Objects;

public class User {
	int User_id;
	String name;
	String email;
	
	
	public User() {
	}


	public User(int User_id, String name, String email) {
		super();
		this.User_id = User_id;
		this.name = name;
		this.email = email;
	}


	public int getUser_id() {
		return User_id;
	}


	public void setUser_id(int User_id) {
		this.User_id = User_id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	@Override
	public String toString() {
		return "\n User [ \n User_id=" + User_id + ",\n name=" + name + ",\n email=" + email + "\n ]";
	}


	@Override
	public int hashCode() {
		return Objects.hash(email, User_id, name);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		return Objects.equals(email, other.email) && User_id == other.User_id && Objects.equals(name, other.name);
	}
	
	
	

	

}
