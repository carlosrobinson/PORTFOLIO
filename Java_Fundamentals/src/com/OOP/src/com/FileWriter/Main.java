package com.FileWriter;

import java.io.FileWriter;
import java.io.IOException;

public class Main {

	public static void main(String[] args) {
		// 
		try {
			FileWriter writer = new FileWriter("list.txt");
			writer.write("apple\nmilk\nbread\nmeats");
			writer.append("\n - short list");
			writer.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
