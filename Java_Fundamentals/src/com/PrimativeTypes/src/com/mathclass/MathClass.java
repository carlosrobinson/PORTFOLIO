package com.mathclass;

import java.util.Scanner;

public class MathClass {

		public static void main(String[] args) {
			// Examining the Math class. 
			/*
			 * We start of by declaring or initializing two variables (a and b) to compare.
			 * Finding the larger of the two numbers by initializing a third variable (c) to compare the two.
			 */
			double a = 3.14;
			double b  = -10;
			double c = Math.max(a, b);
			System.out.println(c); // prints 3.14
			
			
			/*
			 * We start of by declaring or initializing a variable (d) to
			 * find the absolute value of a number.
			 */
			double d = Math.abs(b);
			System.out.println(d); // prints 10.0
			
			
			/*
			 * 	We start of by declaring or initializing two variables (a and b) to calculate to 
			 * find the hypotenuse of a triangle.		
			 * 
			 * formula = c = x^2 + y^2
			 */
			double x;
			double y;
			double z;
			
			Scanner scan = new Scanner(System.in);
			System.out.println("Enter side x: ");
			x = scan.nextDouble();
			
			System.out.println("Enter side :y ");
			y = scan.nextDouble();
			
			z = Math.sqrt((x*x) + (y*y));
			
			System.out.println("The hypotenuse is " +z);
			
			scan.close();
		}

	}

	
