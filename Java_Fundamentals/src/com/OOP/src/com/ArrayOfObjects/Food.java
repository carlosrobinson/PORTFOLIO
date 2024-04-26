package com.ArrayOfObjects;

import java.util.ArrayList;
import java.util.List;

public class Food {
	int id;
	String name;
	
	Food(int id, String name) {
		this.id=id;
		this.name=name;
	}
	
	public List<Food> getAllComics(int i){;
	ArrayList<Food> arr = new ArrayList<>();
		return arr;
	}

	@Override
	public String toString() {
		String list = " {id=" + id + ", name=" + name + ", toString()=" + super.toString() + "}";
		return list;
	}
	
	
}
