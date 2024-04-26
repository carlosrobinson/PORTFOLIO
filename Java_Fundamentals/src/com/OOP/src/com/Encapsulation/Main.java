package com.Encapsulation;

public class Main {

	public static void main(String[] args) {
		// Encapsulation - attributes of a class will be hidden or private.
//		can be accessed only through methods (getters & setters.
//		you should make them private if you don't have a reason to make them public
		Car car1 = new Car("Honda", "Accord", 2024);
		Car car2 = new Car("Cadillac", "Deville", 2025);
		
		Car car3 = new Car(car2);
		
//		change the year
//		car1.setYear(2025);
//		System.out.println(car1.getMake() + "\n" + car1.getModel() + "\n" + car1.getYear() + "\n");
//		 
////	get car1 make
//		System.out.println(car2.getMake() + "\n" + car2.getModel() + "\n" + car2.getYear() + "\n");
//
//		
//		System.out.println(car2.getMake() + "\n" + car2.getModel() + "\n" + car2.getYear());
//		
		
//		copy an object
		car2.copy(car1);
		
		System.out.println("This is an object's address in memory");
		System.out.println(car1);
		System.out.println(car2);
		System.out.println();
		System.out.println("This is an object's attributes");
		System.out.println(car1.getMake());
		System.out.println(car1.getModel());
		System.out.println(car1.getYear());
		System.out.println();
		System.out.println("This is a copyied object's attributes");
		System.out.println(car2.getMake());
		System.out.println(car2.getModel());
		System.out.println(car2.getYear());
		System.out.println();
		
//		System.out.println(car2.getMake());
//		System.out.println(car2.getModel());
//		System.out.println(car2.getYear());
		System.out.println();
		System.out.println("This is a method that copyies an object's attibutes");
		System.out.println(car3.getMake());
		System.out.println(car3.getModel());
		System.out.println(car3.getYear());
		
	
	
	}

}
