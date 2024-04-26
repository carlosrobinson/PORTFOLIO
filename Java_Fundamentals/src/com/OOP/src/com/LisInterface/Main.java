package com.LisInterface;


// Importing all utility classes 
import java.util.*; 

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub  
		        // Creating an object of List interface 
		        // implemented by the ArrayList class 
		        List<Integer> list = new ArrayList<Integer>(); 
		        list.add(11);
		        list.add(22);
		        list.add(33);
		        list.add(44);
		        list.add(55);
		        
		        
		        
		        // get size
		        list.size();
		        // get at index
		        list.get(2);
		        // update at position
		        list.set(1, 55);
		        // for-each method
		        list.forEach(issue-> System.out.println("Number: "+issue));
		        
		        
		        // remove element
		        list.remove(list.get(0));
		        // 
		        for(Integer index:list) {
		        	System.out.println(index);
		        }
				
				

	}

}
