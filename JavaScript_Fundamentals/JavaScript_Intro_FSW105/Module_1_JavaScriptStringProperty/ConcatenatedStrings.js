// concatenated strings____________
var str1 = 'Hello';
var str2 = 'World';
var str3 = "How are you";

console.log("The strings length is : " + str3.length);
console.log("The strings character is : " + str3[4]);
console.log("The strings last character is : " + str3[str3.length-1]);
var whiteSpace = " ";
var concatenated = str1;
concatenated += whiteSpace;
concatenated += str2;
console.log("Concatenated strings : " + concatenated);

// concat() method____________
var multipleConcats = str1.concat(" ",str2, ". ", str3);
console.log("Multiple Concatenated strings : " + multipleConcats);
var colors = ["Red", "Blue", "Green"];
var results = " ".concat(...colors);
console.log("Multiple Concatenated array of strings : " + results);
var stringOfNums = " ".concat(1,2,3);
console.log("Concatenated string of numbers : " + stringOfNums);