package com.WrapperClass;

public class Main {

	@SuppressWarnings({"static-access" })
	public static void main(String[] args) {
		// 

	    Integer myInt = 551;
	    Double myDouble = 5.99;
	    Character myChar = 'A';
	    System.out.println("Value of property: " +myInt.valueOf("551"));
	    String myString = myInt.toString();
	    System.out.println(myDouble);
	    System.out.println(myChar);
	    System.out.println(myInt);
	    System.out.println("Int value property: " + myInt.intValue());
	    System.out.println("Double value property: " + myDouble.doubleValue());
	    System.out.println("Char value property: " + myChar.charValue());
	    System.out.println("Length value property: " + myString.length());
	    
	    // 
	    int primativeInt = 22;
	    Integer wrapperInt = primativeInt;
	    System.out.println("Auto-Boxing value property: " + wrapperInt);
		
		
	}

}
