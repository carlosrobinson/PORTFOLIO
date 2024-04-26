package com.VariableScope;

public class ClassScopeVariable {

    // This is a class-level variable, also known as an instance variable
    // It is accessible throughout the entire class
    private int classVariable = 10;

    public void printClassVariable() {
        // Accessing the class variable within a method
        System.out.println("Class variable: " + classVariable);
    }

    public static void main(String[] args) {
        ClassScopeVariable example = new ClassScopeVariable();

        // Accessing the class variable from the main method
        example.printClassVariable();
    }
}
