package com.ErrorsVsEceptions;

public class Main {

	@SuppressWarnings("unused")
	public static void main(String[] args)  {
		
		
	/* Errors ************ */
		// Testing for error by passing
		// custom integer as an argument
//		StackOverflow.test(5);
		
		
      // Declaring and initializing custom integers 
      int a = 2, b = 8, c = 6;

      if (a > b && a > c)
          System.out.println(a + " is the largest Number");
      else if (b > a && b > c)
          System.out.println(b + " is the largest Number");
      // The correct message should have been
      // System.out.println(b+" is the largest Number"); to make logic
      else
          System.out.println(c + " is the largest Number");
		
      System.out.println();
      
	/* Exceptions ************ */
      int d = 5, e = 0;
      
      // Try-catch block to check and handle exceptions
      try {
          // Attempting to divide by zero
          int f = d / e;
      }
      catch (ArithmeticException exceptionObject) {
          // Displaying line number where exception occurred
          // using printStackTrace() method
    	  exceptionObject.printStackTrace();
      }
	}

}
