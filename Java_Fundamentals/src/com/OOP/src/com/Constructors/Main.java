package com.Constructors;

public class Main {

	@SuppressWarnings("unused")
	public static void main(String[] args) {
		// JVM invokes the default constructor
//		DefaultConstructor dc = new DefaultConstructor();
//		System.out.println(dc);
		
		// JVM invokes your predefined constructor
		Constructors construcArgs = new Constructors(10);
		Constructors construcNoArgs = new Constructors();

//		System.out.println(construcArgs);
//		System.out.println(construcNoArgs.toString());

	}

}
