package com.CustomException;

public class Main {

	public static void main(String[] args) throws CustomException {
		// TODO Auto-generated method stub
		CustomExceptionTest thrower = new CustomExceptionTest();
        System.out.println("The lab code should throw a CustomException, causing a stack trace to be printed to console here:");
        thrower.throwCustomException();
        System.out.println("\nIf this line was printed to console, then throwing an exception was unsuccessful.");
	}

}
