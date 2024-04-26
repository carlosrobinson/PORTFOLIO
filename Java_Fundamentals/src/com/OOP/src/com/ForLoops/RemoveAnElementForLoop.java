package com.ForLoops;

import java.util.ArrayList;
import java.util.List;


public class RemoveAnElementForLoop {
	static int user_id;

	RemoveAnElementForLoop(){
		
	}
	
	 public static List<User>  removeUser( List<User> user, int user_id) {
		List<User> newList = new ArrayList<>();
		for(int i = 0; i < user.size(); i++) {
			while(i < user.size() && user.get(i).getUser_id() != user_id) {
				System.out.println("User ID: " + user.get(i).getUser_id());
				newList.add(user.get(i));
				i++;
			}		
		}
		return newList;

	}
}
		


