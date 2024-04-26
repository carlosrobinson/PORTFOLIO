package com.randomclass;
import java.util.Random;

public class RandomClass {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Random random = new Random();
		
		/*
		 * These are not true random numbers but sudo random numbers
		 * 
		 */
		int e = random.nextInt(6 + 1);
		double f = random.nextDouble();
		boolean g = random.nextBoolean();
		System.out.println(e);
		System.out.println(f);
		System.out.println(g);
		
	}

}
