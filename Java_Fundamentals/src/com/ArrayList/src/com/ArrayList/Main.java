package com.ArrayList;

import java.util.ArrayList;

public class Main {

	public static void main(String[] args) {
		
		ArrayList<String> food = new ArrayList<String>();
		
		food.add("pizza");
		food.add("chicken");
		food.add("ice cream");
		food.add("fries");
		food.add("apple");
		
		food.set(0, "carrots");
		food.remove(2);
//		food.clear();
		
		for(int i = 0; i < food.size(); i++) {
//			System.out.println(food.get(i));
		}
		
		
		ArrayList<ArrayList<String>> groceryList = new ArrayList<ArrayList<String>>();
		
		ArrayList<String> produceList = new ArrayList<String>();
		produceList.add("tamatos");
		produceList.add("bannanas");
		produceList.add("potatoes");
		
		ArrayList<String> bakeryList = new ArrayList<String>();
		bakeryList.add("donuts");
		bakeryList.add("coockies");
		bakeryList.add("cake");
		
		ArrayList<String> drinksList = new ArrayList<String>();
		drinksList.add("Coke");
		drinksList.add("coffee");
		drinksList.add("water");
		
		groceryList.add(produceList);
		groceryList.add(bakeryList);
		groceryList.add(drinksList);
		
		System.out.println(groceryList.get(1).get(2));  // prints cake

		for(ArrayList<String> items: groceryList){

		}
	}

}
