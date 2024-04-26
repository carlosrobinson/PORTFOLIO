package com.AccessModifiers.package2;

import com.AccessModifiers.package1.*;


@SuppressWarnings("unused")
public class C {
	
//	public modifier
//	public String publicMessage = "This is the public message";
	
//	protected modifier
	private String protectedMessage = "This is protected";
	
//	no modifier
//	String defaultMessage = "This is the default message";
	public void isInThePackage() {
		System.out.println(this.protectedMessage);
	}
}
