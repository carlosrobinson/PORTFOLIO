package com.ArrayOfObjects;

//import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.*;

public class Main {

	public static void main(String[] args) {
		// Arrays  
//		int[] numbers = new int[3];
//		char[] characters = new  char[4];
//		String[] strings = new String[5]; 
		
		
		// Set index to 0;
		int index = 0; 

		ArrayList<Food> arr = new ArrayList<>();
		Food[] refrigerator = new Food[5];
			
		// Initialize your food list
		// to populate your ArrayList;
		Food food1 = new Food(2, "pizza");
		Food food2 = new Food(33, "peperoni");
		Food food3 = new Food(14, "tomato");
		Food food4 = new Food(3, "cheese");
		Food food5 = new Food(26, "sausage");
		

		
		// add items to ArrayList
		refrigerator[0] = food1;
		refrigerator[1] = food2;
		refrigerator[2] = food3;
		refrigerator[3] = food4;
		refrigerator[4] = food5;
		for(index = 0;index < refrigerator.length; index++) {
			System.out.println(refrigerator[index]);
		}
			
			
//		}
		for(index = 0;index < refrigerator.length; index++) {
			arr.add(refrigerator[index]= food1);
		}
		
		
		
//		System.out.println(refrigerator[1].name);
		System.out.println(refrigerator.length);
//		System.out.println("\n");
//		System.out.println("For Loop ------------");
//		for (int i = 0; i < refrigerator.length; i++) {
//			System.out.println(refrigerator[i].name);
//		}
		
//		System.out.println("\n");
//		System.out.println("\nFor Each ------------");
//		System.out.println(refrigerator.toString());
//		for(ArrayList item: refrigerator) {
		// your code;
		
//	}
		

			

			
			try {
				FileWriter writer = new FileWriter("list.txt");
				
//				writer.write(" testingArray: " + arr.toString() );
//				writer.append("\n - short list");
				writer.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			
			try {
				FileReader reader = new FileReader("list.txt");
				int data = reader.read(); 
				while(data != -1) {
//					System.out.print((char)data);
					data = reader.read();
				}
				reader.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
//			System.out.print(arr);
//		}
		
	}

}
