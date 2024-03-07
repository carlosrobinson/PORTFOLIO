package com.Daimond;      

import java.util.Scanner;

public class DaimontPattern {
	static int flag = 0;
	static int index = 0;
	public static void main(String[] args) {
		
		
		Scanner scan = new Scanner(System.in);
		int[] arr =  new int[5];
		System.out.println("Enter array elements: ");
		for(int i = 0; i < arr.length; i++) {
			arr[i] = scan.nextInt();
		}
		
		System.out.println("Enter a number: ");
		int searchKey = scan.nextInt();
		findElement(arr, searchKey);
		
		scan.close();

	}
	
	
	public static void findElement(int[] arr2, int search) {
		for(int i = 0; i < arr2.length; i++) {
//			System.out.println(i + " is less than or equal to arr.length: " + (i <= arr2.length));
			if(arr2[i] == search) {
				flag = 1;
				index = i;
			}
		}
	
		if(flag == 1) {
			System.out.println("Element found at index; " + index );
		}else {
			System.out.println("Element not found");
		}
		
	}
}
