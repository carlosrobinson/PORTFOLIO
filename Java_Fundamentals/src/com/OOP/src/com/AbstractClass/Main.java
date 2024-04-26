/**
 * 
 */
package com.AbstractClass;
//	abstract -abstract classes cannot be instantiated, but they can
// have a subclass. abstract methods are without an implementation

public class Main {

	//
	public static void main(String[] args) {
//		The Vehicle class can not be instantiated
//		Vehicle vechicle1 = new Vehicle();
		Car car1 = new Car();
		car1.go();
		

	}

}
