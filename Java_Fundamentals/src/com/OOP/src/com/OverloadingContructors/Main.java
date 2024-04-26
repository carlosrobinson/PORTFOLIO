package com.OverloadingContructors;

public class Main {

	public static void main(String[] args) {
		
		
		Pizza pizza = new Pizza("Thin crust", "tomato", "Mozzerella", "pepparoni");
		System.out.println("This is your pizza: " );
		System.out.println();
		System.out.println(pizza.bread);
		System.out.println(pizza.sauce);
		System.out.println(pizza.cheese);
		System.out.println(pizza.topping);

	}

}
