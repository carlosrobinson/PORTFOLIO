// // Section A. Use the built-in array method .filter() to solve all of these problems:
// // 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// var nums = [2, 3 , 15, 24, 1, 18];
// var fiveAndGreaterOnly  = nums.filter((num) =>{
//     // code
//     return num > 5;
// })

// console.log("Five or greater: " + fiveAndGreaterOnly);


// // 2) Given an array of numbers, return a new array that only includes the even numbers.
// var nums = [8, 23, 15, 14, 28, 36, 13];
// var results = nums.filter((num) =>{
//     // code
//     return num % 2 ===0
// })
// console.log("Even only: " + results);

// Extra Credit) Make a filtered list of all the people who are old enough to see The Matrix (17+).
var person = [
    {
        name: "brain",
        age: 7
    }, 
    {
        name: "galise",
        age: 19
    }, 
    {
        name: "peggy",
        age: 17
    }, 
    {
        name: "kevin",
        age: 3
    }, 
    {
        name: "bart",
        age: 22
    }
]

// var checkId = person.filter((oldEnough)=>{
//         if(oldEnough.age >= 17) {console.log(oldEnough.name + " is old enough")};
        
// })
// console.log(checkId);


// // Section B. Use the built-in .map() method on arrays to solve all of these problems:
// // 1) Make an array of numbers that are doubles of the first array
// var nums = [1, 2, 3, 4, 5];
// nums.map( (item) =>{
//     return nums.push(item);
// })
// console.log(nums.sort());


// // 2) Take an array of numbers and make them strings
// var nums = [1, 2, 3, 4, 5];
// var results = nums.map(num => {return num.toString();});
// console.log(results);

// 3) Capitalize each of an array of names
var names = ["betty", "cecil", "raven", "alvin", "reese"];
var capitalized = [];
names.forEach(element => {
    element = element.charAt(0).toLocaleUpperCase() + element.slice(1);
    capitalized += element;
    capitalized+=", ";
});
console.log("Capitalize first letter: " + capitalized);


// Extra Credit 1) Make an array of strings of the names
var capitalizedToString = [];
names.forEach(element => {
        element = element.charAt(0).toLocaleUpperCase() + element.slice(1)
        capitalizedToString.push(element);
    })
    console.log(capitalizedToString);

// Extra Credit 2) Make an array of strings of the names saying whether or not they can go to The Matrix
var checkId = person.filter((element)=>{
        if(element.age >= 17) {
            element.name= element.name.charAt(0).toLocaleUpperCase() + element.name.slice(1);
            console.log(element.name + " is old enough to see the Matrix");
        };
        
})
// Section C. Use the built-in .reduce() method on arrays to solve all of these problems:
// 1) Turn an array of numbers into a total of all the numbers



// 2) Turn an array of numbers into a long string of all those numbers.



// 3) Turn an array of voter objects into a count of how many people voted

// Note: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this.

// Extra Credit 1) Given an array of all your wishlist items, return the total cost of all items



// Extra Credit 2) Given an array of arrays, flatten them into a single array

// Note: Take a look at Array.concat() to help with this one


// Section D. Use the built-in .sort() method on arrays to solve all of these problems:
// 1) Sort an array from smallest number to largest



// 2) Sort an array from largest number to smallest



// 3) Sort an array from shortest string to longest




// Extra Credit) Sort an array alphabetically



