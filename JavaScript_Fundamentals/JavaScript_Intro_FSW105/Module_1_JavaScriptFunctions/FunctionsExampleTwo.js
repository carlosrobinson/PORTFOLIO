// Functions part 2

function sum(num1, num2){
    return num1 + num2
}

// Calling a function (execute a function)
var result = sum(10, 25) // arguments
console.log(result)

function myFunc(data){
    console.log(data)
}


// passes different types of data.
myFunc(1)
myFunc("hello")
myFunc(true)
myFunc([1,2 ,3, 4])
myFunc({name: "joe"})