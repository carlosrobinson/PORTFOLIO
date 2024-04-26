package com.MemoryManagement;

class Person {
    int id;
    String name;

    public Person(int id, String name) {
        this.id = id;
        this.name = name;
    }


    public class PersonBuilder {
        private static Person buildPerson(int id, String name) {
            return new Person(id, name);
        }
    }

    // When we enter the main() method, a space in stack memory is created 
    // to store primitives and references of this method.
    public static void main(String[] args) {
    	// Stack memory directly stores the primitive value of integer id.
        int id = 23;
        String name = "John";
        // The reference variable person of type Person will also be created 
        // in stack memory, which will point to the actual object in the heap
        // The call to the parameterized constructor Person(int, String) from main() will allocate further memory on top of the previous stack. This will store:
        	// The this object reference of the calling object in stack memory
        	// The primitive value id in the stack memory
        	// The reference variable of String argument name, which will point to the actual string from string pool in heap memory
        Person person = null;
        // The main method is further calling the buildPerson() static method, for which further allocation will take place in stack memory on top of the previous one. 
        // This will again store variables in the manner described above.
        person = PersonBuilder.buildPerson(id, name);
        // However, heap memory will store all instance variables for the newly created object person of type Person.
        System.out.println(person.id + "\n" + person.name);
    }
}
