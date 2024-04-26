package com.Casting;

//However, cases where the original data type is larger than the target type, you will have to explicitly 
//convert them using parentheses. There can be data loss using this method, as the target type is not always 
//able to represent the original value.

public class ExplicitCasting {

  @SuppressWarnings("unused")
public static void main(String[] args){
    short s = 150;
//    byte b = s; // this will not compile without an explicit cast 
//    // and in this case, even with an explicit cast, there will be data loss
//    // as bytes can only hold values up to 127
//    // b would actually hold the value -106 here
    
    float f = 10.23f;
//    int i = f; // this will also not compile without an explicit cast 
//    // although floats and ints are both represented in memory with 32 bits, floats can hold decimal values while ints cannot
//    // we can explicitly cast these values, but we lose .23
//    // i holds the value 10
    
  }
}

