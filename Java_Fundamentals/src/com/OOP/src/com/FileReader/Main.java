package com.FileReader;


import java.io.*;


public class Main {

	public static void main(String[] args) {
		// FileReader = read the contents of a file a stream of characters. One by one
		// 				read() returns an int value which contains the byte value 
		//				when read() returns -1, there is no more data to be read.
		
		
		try {
			FileReader reader = new FileReader("list.txt");
			
			int data = reader.read();
//			int index = 0;
			String cb = " ";
			while(data != -1) {
//				System.out.print((char)data);
				cb = cb + (char)data;
				data = reader.read();
//				index++;
			}
			reader.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
		}
		
	}
	
}
