package com.flowcontrol;

import java.util.Scanner;

public class WhileLoops {

	public static void main(String[] args) {
		/*
		 * While loops will execute a block of code as long as it's condition is true. 
		 */
		
		Scanner scan = new Scanner(System.in);
		
		String name = "";
		
		// While loop
		while(name.isBlank()) {
			System.out.print("Enter your name: ");
			name = scan.nextLine();		
		}
		System.out.println("Hello " + name);
		
		
		// Do loop
		int count = 0;
		do {
			count= count + 1;
			System.out.println("The loop ran: " + count + " times.");
			
		}while(name.isBlank()); {
			count= count + 1;
			System.out.print("Enter your name: ");
			name = scan.nextLine();	
		}
		System.out.println("Hello " + name);
		System.out.println("The loop ran: " + count);
		scan.close();
	}
}