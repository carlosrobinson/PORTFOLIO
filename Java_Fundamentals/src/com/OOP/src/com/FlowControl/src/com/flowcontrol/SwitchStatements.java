package com.flowcontrol;

public class SwitchStatements {

	public static void main(String[] args) {
		/*
		 * Switch statements allows a variable to be tested for equality against a list of  values.
		 * The data types we can use with switch statements are: byte, int, short, char, and enumerators.
		 */
		
		String day = "Doomsday";
		
		switch(day) {
			case "Sunday":
				System.out.println("Today is Sunday the begining of the week");
				break;
			case "Monday":
				System.out.println("Today is Monday. Lets get this MONEY!!");
				break; // switch statements uses what is called fall-through logic, so to control
						// when to break out of the statement, we use the break key-word
			case "Tuesday":
				System.out.println("Today is Tuesday");
				break;
			case "Wendsday":
				System.out.println("Today is Wendsday, THE MIDDLE OF THE WEEK.");
				break;
			case "Thursday":
				System.out.println("Today is Thursday. Almost the weekend. Yay!");
				break;
			case "Friday":
				System.out.println("Today is Friday the last workday. It's the weekend!");
				break;
			case "Saturday":
				System.out.println("Today is Saturday. LETS NETFLIX AND CHILL");
				break;
			default:
				System.out.println("What (^~^) is " + day);
		}

	}

}
