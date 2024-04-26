// A simple Calculator
// Inside your node module [project folder] in the console type: npm init -y
// Then type: npm install readline-sync
//
// week 3 live session
// time-lapse: 1:02:06
var readlineSync = require("readline-sync"); // this is the requirement to create your basic program 

// questionInt method - Read the documentation search for the method: ctrl+f
var num1 = readlineSync.questionInt("Please enter your first number: ");
var num2 = readlineSync.questionInt("Please enter your second number: ");
var calculation = readlineSync.question("What tyoe of operation do you wish to execute: add, sub, mult, div? ");

// Addition
function add(a, b){
    return a + b;
}

// Subtraction
function subtractNumbers(a, b){
    return a - b;
}

// Multiplication
function multiplyNumbers(a, b){
    return a * b;
}

// Subtraction
function divideNumbers(a, b){
    return a / b;
}


switch(calculation){
    case "add": {
        console.log(add(num1, num2));
        break;
    }
    case "sub": {
        console.log(subtractNumbers(num1, num2));
        break;
    }
    case "mult": {
        console.log(multiplyNumbers(num1, num2));
        break;
    }
    case "div": {
        console.log(divideNumbers(num1, num2));
        break;
    }
    default:{
        console.log("Incorrect choice. Operation has canceled, Please restart Calculator")
    }
}