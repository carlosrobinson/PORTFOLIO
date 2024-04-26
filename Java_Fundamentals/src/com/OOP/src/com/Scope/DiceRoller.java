package com.Scope;
import java.util.Random;

public class DiceRoller {
	//global = declared outside a method, but within a class
	// visible to all parts of a class.
	Random random;
	int number;
	
	DiceRoller(){
		random = new Random();
		roll(random, number);
	}
	
	void roll(Random random, int number) {
		number = random.nextInt(6) + 1;
		System.out.println(number);	
	}

}
