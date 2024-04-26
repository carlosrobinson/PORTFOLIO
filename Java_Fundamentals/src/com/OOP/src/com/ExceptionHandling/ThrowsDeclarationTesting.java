package com.ExceptionHandling;

public class ThrowsDeclarationTesting {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ThrowsDeclaration declaration = new ThrowsDeclaration();
		
		try {
			declaration.testMethod();
			System.out.println();
			}catch(Exception e) {
//				e.printStackTrace();
				System.out.println("NullPointerException Ocurred");
		}
	}

}
