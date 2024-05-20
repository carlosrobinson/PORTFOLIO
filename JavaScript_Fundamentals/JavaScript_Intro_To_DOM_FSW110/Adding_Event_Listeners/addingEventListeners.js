var count = 0;
//  function myFunction(){
//     count++
//     console.log("You clicked me " + count  + " times");
// }

var myFunc = document.getElementById("a-div").addEventListener("click", function(){
    count++
    console.log("You clicked me " + count  + " times")
})


/**
 * If you've added an event handler using addEventListener(), 
 * you can remove it again using the removeEventListener() method.
 */

// // console log events 
// Object.keys(window).forEach(key => {
//     if(/^on/.test(key)){
//         window.addEventListener(key.slice(2), event => {
//             // console.log(event.type)
//         })
//     }
// })
// console.log(Object.keys(window));


// pass a function
function myFunction(){
    console.log("You clicked me");
}

myFunc.addEventListener("click", myFunc);

