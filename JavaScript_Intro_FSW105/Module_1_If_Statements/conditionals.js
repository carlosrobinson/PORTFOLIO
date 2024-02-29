// Conditionals 
// Boolean - true / false

// if(2 === 4){
//     console.log("TWO IS EQUAL TO FOUR")
// } else if(2 === 5){
//     console.log("TWO IS EQUAL TO FIVE")
// } else if(2 === 3){
//     console.log("TWO IS EQUAL TO THREE")
// } else {
//     console.log("I dont know what's going on")
// }

// Comparison Operator
   // >, <, <=, >=, ==, ===, !=, !== 
   
//    if("2" !== 2){
//        console.log("They are equal")
//    }


// Truthy and Falsey
    // falsey
        // 0
        // ""
        // null
        // undefined
        // false
        // NaN
        
// if([1, 2, 3]){
//     console.log("it is truthy")
// } else {
//     console.log("it is falsey")
// }


// Logic Operators
    // && - and
    // || - or
    // !  - not
    

    // && Operators
    if(2 === 2 && 2 === 3){
        console.log("It's working!")
    } else {
        console.log("It's not working")
    }

    // || Or Operators
    // if(2 === 2 || 2 === 3){
    //     console.log("It's working!")
    // } else {
    //     console.log("It's not working")
    // }


    // Switch Statement
var color = "green"

switch(color){
    case "red":
        console.log("The color is red")
        break
    case "blue":
        console.log("The color is blue")
        break
    case "yellow":
        console.log("The color is yellow")
        break
    default:
        console.log("The color is not red, blue or yellow")
}