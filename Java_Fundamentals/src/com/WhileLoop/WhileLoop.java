package com.examples.WhileLoop;

import java.util.ArrayList;
import java.util.Scanner;

public class WhileLoop {

	public static void main(String[] args) {
		
		String sentence1 = "Flapjacks are awsome!!";
		String sentence2 = "Flapjacks is awsome!!";
		
		Scanner scan1 = new Scanner(sentence1);
		ArrayList<String> words = new ArrayList<String>();
		while(scan1.hasNext()) {
			words.add(scan1.next());
		}
		
		
		Scanner scan2 = new Scanner(sentence2);
		ArrayList<String> z = new ArrayList<String>();
		while(scan2.hasNext()) {
			z.add(scan2.next());
		}
		
		System.out.println("the words: \n" + words + " \n      and \n" + z + "\n");
		for(int i = 0; i < z.size();) {
			if(words.get(i).contains(z.get(i))) {
				System.out.println("the word matches: " + words.get(i)+ " " +  z.get(i));
				i++;
			}else { 
				System.out.println("the word does not match: " + words.get(i)+ " " +  z.get(i));
				i++;
			}
			
		}
		
		scan1.close();
		scan2.close();
	}
}
