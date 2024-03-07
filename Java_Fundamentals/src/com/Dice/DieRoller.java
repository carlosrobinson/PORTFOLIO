package com.examples.Dice;

import java.util.Random;

public class DieRoller {

	public static void main(String[] args) {
		Random dice = new Random();
		int d1 = dice.nextInt(40 );
		
		int d2 = dice.nextInt(10);
		
		int d3 = dice.nextInt(10);
		System.out.println("Your lottory numbers are : "+ d1 + "," + d2 + "," + d3);
	}

}
