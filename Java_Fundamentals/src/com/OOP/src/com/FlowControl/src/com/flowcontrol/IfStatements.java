package com.flowcontrol;

public class IfStatements {

	public static void main(String[] args) {
		/*
		 * If statements perform a block of code if it's condition is true.
		 * we can for example verify a persons age.
		 */
		int age = 3;
		
		if(age == 18) {
			System.out.println("You've just become an adult");
		}
		else if(age >= 19) {
			System.out.println("You are an adult");
		}
		else if(age <= 3) {
			System.out.println("You are a todler");
		}
		else {
			System.out.println("You are not an adult!");
		}
	}

}
