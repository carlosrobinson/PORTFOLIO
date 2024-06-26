package com.SwitchStatements;

public class Main {

	public static void main(String[] args) {
		// switch statements = conditional statement that tries to match the 
		// variable contained in the statement with a particular value( case: conditional {statement}.
		int x = 10;
		int y = 6;
		
		// fall-through logic
        switch(x) {
    		case 10: System.out.println("case 10 ran");
    		default: System.out.println("x: The default case ran.");
		}
        
        
        // use a break statement to exit a particular case to avoid fall-through logic.
        switch(y) {
        case 6: System.out.println("case 6 ran");
        	break;
        case 7: System.out.println("case 7 ran");
        	break;
        case 10: System.out.println("case 10 ran");
        	break;
        default: System.out.println("y: The default case ran.");
    }
	}

}
