package com.flowcontrol;

import java.util.Scanner;

public class LogicalOperators {

	public static void main(String[] args) {
		/*
		 * Logical operators are used to connect two or more
		 * 		&& = (AND) both conditions must be true
		 * 		|| = (OR) either condition must be true
		 * 		! = (NOT) reverses biikean value of a condition
		 */

		// Logical && (AND) condition
		int age = 28;
//		String gender = "male";
//		
//		if(age >=18 && age <= 20) {
//			System.out.println("you are an adult, but you cannot buy alcohol.");
//		}else if(age >=21 && gender == "female") {
//			System.out.println("you are an adult female, tonight is ladies night. HALF PRICE FOR YOU!!");
//		}else if(age >=18 && gender == "male") {
//			System.out.println("you are an adult male, SORRY FULL PRICE BUDDY!!.");
//		}else if(age <18) {
//			System.out.println("Were is your parents!!!");
//		}
		
		
		// Logical || (OR) condition
		Scanner scan = new Scanner(System.in);
//		
		System.out.println("You are playing a game! Press q or Q to quit");
		String response = scan.next();
//		if(response.equals("q") || response.equals("Q") ) {
//			System.out.println("You quit the game");
//		}else {
//			System.out.println("You are still in the game");
//		}
//		scan.close();
		
		
		// Logical ! (NOT) condition
		
		if(!response.equals("q") && !response.equals("Q") ) {
			System.out.println("You are still playing the game");
		}else {
			System.out.println("You quit the game");
		}
		scan.close();
	}

}
