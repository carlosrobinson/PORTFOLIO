package com.ToStringMethod;

public class Car {
	
	String make = "Ford";
	String model = "Mustang";
	String color = "red";
	int year = 2021;
	
	
	// Override the toString method.
	public String toString() {
		
// Implicitly
//		String myString = make + "\n" + model + "\n" + color + "\n" + year;
//		return myString
// Explicitly
		return make + "\n" + model + "\n" + color + "\n" + year;
	}
	

}
