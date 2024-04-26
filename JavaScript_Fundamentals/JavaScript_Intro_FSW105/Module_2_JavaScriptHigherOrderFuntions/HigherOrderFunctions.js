
// // call-back functions (methods)
// function callBackFunction(func){
//     func();
//     func();
//     func();
// }

// function dog() {
//     console.log("Barking....Woof, Woof, Woof.")
// }

// callBackFunction(dog);

/**
 * 
 * When we  want to be creative with our functions returning a function :).
 * 
 * Ex - function doSomething(){
 *          return function(){
 *                return "Meowing... meoW, meoW, meoW";
 *              }
 * }
 */
// function doSomething(){
//         return function(){
//             return "Meowing... meoW, meoW, meoW";
//     }
// }        

// // Then just call it using double colons " someFunction()() " to execute the inner function.
// console.log(doSomething()());



// Stored in a variable
var myFunc = function(){return "Some Data";};
console.log(myFunc());


// myFunc2 higher order function
function myFunc2(a, b, callback){
    return callback(a, b);
}

function sum(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}
console.log(myFunc2(4, 5, sum));
console.log(myFunc2(4, 5, subtract));