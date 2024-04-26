package com.ForLoops;

import java.util.ArrayList;
import java.util.List;

public class Main {
	public static void main(String[] args) {
		
	// Loop Methods - properties of data
		
		
		// character array
		System.out.println("\nFor Loop: ");
		ForLoops.forLoopMethodCountCharacters("Hello World this is my for-loop");
		System.out.println("\nFor Each: ");
		ForLoops.forEachMethodCountCharacters("Hello World this is my for each ");
		
		
		
		
		// array list
		// Get some list, or data from a database an create a method to remove a User
		
		List<User> originalList = new ArrayList<>();
		User User1 = new User(1, "Carl", "usr1@test.com");
		User User2 = new User(2, "Chris", "usr2@test.com");
		User User3 = new User(3, "Sheila", "usr3@test.com");
		User User4 = new User(4, "Jane", "usr4@test.com");
		User User5 = new User(5, "Pike", "usr5@test.com");
		
		originalList.add(User1);
		originalList.add(User2);
		originalList.add(User3);
		originalList.add(User4);
		originalList.add(User5);
		
		System.out.println("Original List: \n");
		System.out.println("_____________________\n");
		System.out.println("Original: \n"  + originalList);
		System.out.println("End of Original List: \n");
		System.out.println("_____________________\n");
		
		
		//	Remove a user from a list or  database ;
		System.out.println("New List: \n");
//		System.out.println("_____________________\n");
		System.out.println(RemoveAnElementForLoop.removeUser(originalList, 4));
		System.out.println("End of New List: \n");
//		System.out.println("_____________________\n");
		
	}
}
