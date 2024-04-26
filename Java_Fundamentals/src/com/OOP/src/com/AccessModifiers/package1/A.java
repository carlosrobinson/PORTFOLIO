package com.AccessModifiers.package1;

import com.AccessModifiers.package2.*;

@SuppressWarnings("unused")
public class A {
	
	public static void main(String[] args) {
//		A private field cannot be accessed outside of it's package.
		B b = new B();
//		System.out.println(b.protectedMessage);
		System.out.println(b.protectedMess());

	}
}
