// Iterative Method - repatedly calling instructions or fuctions printing over and over
console.log("from an iterative method\n");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World\n");


// Using Loops
console.log("from a loop");
for(var i = 0; i<10;i++){
    console.log("Hello World");
}


console.log("\nfrom a while loop");
// While Loop - entry control loop
var i = 1;
while(i<= 4){
    console.log("print: " + i);
    i++;
}

// Do While Loop - exit control loop
console.log("\nDo While Loop: ");
do {
    console.log("The condition will print at least once " );
} while ((i<= 4)){
    console.log("print: ");
    i++; 
};


// * !!!!! start at at 5:21 of video Loop Statements

// For Loop
/*
for(initialization condition; testing condition; incremen/decrement ) {
    statement(s)
}
*/
console.log("\nFor Loop without initialization: ");
var i = 1;

for(; i < 10; i+=2) {
    console.log("Inside the loop: " + i);
}
console.log("Oside the loop: " + i);




console.log("\nFor Loop without a testing condion: " + 1);
var j;
for(j = 1; ; j+=2){
    if(j<=10){
        console.log("Inside the loop: " + j);
    }
    console.log("Oside the loop: " + j);
}


