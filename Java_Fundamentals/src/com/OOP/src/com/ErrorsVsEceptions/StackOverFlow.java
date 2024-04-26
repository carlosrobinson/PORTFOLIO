package com.ErrorsVsEceptions;

//Java Program to Illustrate Error
//Stack overflow error via infinite recursion

//Class 1
class StackOverflow {

	// method of this class
	public static void test(int i)
	{
//		 Not correct as base condition leads to
		// non-stop recursion.
		if (i == 0)
			return;
		else {
			test(i++);
		}
		

    }
}


