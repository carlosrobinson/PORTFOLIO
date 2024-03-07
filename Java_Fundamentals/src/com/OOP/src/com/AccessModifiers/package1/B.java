package com.AccessModifiers.package1;

import com.AccessModifiers.package2.*;


@SuppressWarnings("unused")
public class B {
	private String protectedMessage = "This is protected";

	public String protectedMess() {
		return this.protectedMessage;
	}
	
}
