package com.Inheritance;

public class AirplaneMethodOverring extends Vehicles{

	@Override
	public void go() {
		// /////Using Method overriding
		System.out.println("This vehicle is *flying* ");
	}

	
	public void stop() {
		// TODO Auto-generated method stub
		super.stop();
	}

	
}
