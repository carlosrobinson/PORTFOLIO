package com.ForLoops;


public class ForLoops {
	static int i=0;
	
	public static String forLoopMethodCountCharacters(String words) {
		// method scope variables
		String word = "";
		char[] ch = words.toCharArray();
		for(int i = 0; i < ch.length; i++ )    {
			while(i < ch.length && ch[i] != ' ') {
				word = word + ch[i];
				i++;
			}
			if(word.length() > 0) {
			  System.out.println(word +" Size:  " + word.length() + " characters.");
			}
		}
		return null;
	}
	
	
	public static String forEachMethodCountCharacters(String words) {
		// method scope variables
		char[] character = words.toCharArray() ;
		String word = "";
		for(Character ch: character) {
			if(ch != ' ') {
					word = word + ch;
					i++;
			}
			else {
					System.out.println(word +" Size:  " + i + " characters.");
			}
		}
		return null;
	}

}
