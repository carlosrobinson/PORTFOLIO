package com.ArrayOfObjects;

public class Main {

	public static void main(String[] args) {
		// Arrays  
//		int[] numbers = new int[3];
//		char[] characters = new  char[4];
//		String[] strings = new String[5]; 
		
		Food[] refrigerator = new Food[5];
		
		
		Food food1 = new Food("pizza");
		Food food2 = new Food("pepperoni");
		Food food3 = new Food("tomato");
		Food food4 = new Food("cheese");
		Food food5 = new Food("sausage");
		
		refrigerator[0] = food1;
		refrigerator[1] = food2;
		refrigerator[2] = food3;
		refrigerator[3] = food4;
		refrigerator[4] = food5;
		
//		System.out.println(refrigerator[1].name);
		System.out.println("\n");
		System.out.println("For Loop ------------");
		for (int i = 0; i < refrigerator.length; i++) {
			System.out.println(refrigerator[i].name);
		}
		
		System.out.println("\n");
		System.out.println("\nFor Each ------------");
		for(Food item: refrigerator) {
			System.out.println(item.name);
		}
		
	}

}
