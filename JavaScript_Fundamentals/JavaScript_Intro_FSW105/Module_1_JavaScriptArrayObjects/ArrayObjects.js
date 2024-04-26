// Array Object data types
// array literal
// var numbersArray = [1, 2, 3, 4];
// var stringArray = ["bird", "dog", "cat", "fish"];
// var mixedArray = [ 10, "string1", 33.25, true];

// // array constructor - intialized using the "new keyword"
// // var arr1 = new Array();
// // var arr2 = new Array(array_length);
// // var arr3 = new Array(element1, element2, ....elementN);

// // add values  to an array
var arr1 = new Array();
arr1[0] = "cat";
arr1[1] = "dog";
arr1[2] = "bird";

var arr2 = new Array(3);
arr2[0] = 10;
arr2[1] = 25;
arr2[2] = 100;

var arr3 = new Array(10, "string1", 33.25, true);


// console.log(arr1); // returns the array with  values added
// console.log(arr2); // returns the array with  values added
// console.log(arr3); // returns the array with  values added

// // access values in array
// console.log(arr1[1]); // returns dog
// console.log(arr2[1]); // returns 25
// console.log(arr3[1]); // returns string1



// looping through an array
// for(var i = 0; i < arr3.length; i++){
//     console.log(arr3[i]);
// }

// forEach() syntax: array.forEach(callback, thisArg)
arr1.forEach(function(indexElement, index, array){
    console.log(indexElement + " is at position " + index)
})


// adding an element to the array
// arr1.push("fish"); // adds element to the end of the array
// console.log(arr1);
// arr1.unshift("elephant"); // adds element to the begining of the array
// console.log(arr1);

// adding and removing  elements from the array
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)
// arr1.splice(1, 1); // Removes 1 item at index 1
// console.log(arr1);
// arr1.splice(2, 1, "kangaroo"); // Replaces 1 item at index 2 with kangaroo
// console.log(arr1); 
// arr1.splice(0, 1, 'moose', 'giraffe');	// Inserts 'x' and 'y' replacing 1 item at index 0
// console.log(arr1); 


// delete an element from the end of the array
// arr1.pop();
// console.log(arr1);

// delete an element from the beginning of the array
// arr1.shift();
// console.log(arr1);

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegatables = ["carrot", "tomato", "pepper", "lettuce"];

// 1. Remove the last item frome the vetable arrray.
vegatables.pop();
fruit.shift();
// console.log(fruit.indexOf("orange"));
fruit.push(fruit.indexOf("orange"))
vegatables.push(vegatables.length)

// console.log(vegatables);
// console.log(fruit);
// console.log(vegatables.length)
var grocerys = fruit.concat(vegatables);
grocerys.splice(4, 2);
grocerys.reverse()
console.log(grocerys)