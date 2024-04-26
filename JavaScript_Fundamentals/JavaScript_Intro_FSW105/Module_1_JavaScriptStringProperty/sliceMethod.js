// slice() method____________
var str1 = 'Hello';
var str2 = 'World';
var str3 = "How are you";

// ************first example*****************************
// var subStr = str.slice(startIndex [, endIndex]);
var email = 'johndoe@email.com'
var userName = email.slice(0, email.indexOf('@'));
console.log("The user name is: " + userName);
// ***************second example**********************************

// a function that takes a string and returns that string____________
// where the first half is capitalized, and the second half 
// is lower cased. (If the string length is odd, capitalize 
// the shorter of the first half.) str
// first we create a functuon ti roumd the first half to the nearest integer value.
var roundedDown = function(str){
    return Math.floor((str.length / 2) - ((str.length / 2)%2)) ;
}

// create the logic for both halves.
var firstHalf = function(str){
    return str.slice(0, roundedDown(str)).toUpperCase();
}
var secondHalf = function(str){
    return str.slice(roundedDown(str), str.length).toLowerCase();
}

console.log(firstHalf(str1) + secondHalf(str1));