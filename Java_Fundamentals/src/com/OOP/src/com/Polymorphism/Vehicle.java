package com.Polymorphism;

public class Vehicle {

	Car car;
	Bicycle bicycle;
	Boat boat;
	
	
	Vehicle(){
		
	}
	
	public void go() {
		System.out.println("the vehicle is moving");
	}
	
	
	public void stop() {
		System.out.println("the vehicle has stopped");
	}
	
//	Vehicle(Car car, Bicycle bicycle, Boat boat){
//		
//	}
}
