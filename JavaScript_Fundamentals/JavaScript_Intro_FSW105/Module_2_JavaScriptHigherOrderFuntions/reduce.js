var numbers = [1,2,3,4,5];

var combine = numbers.reduce((a,b, arr) =>{
    return arr[a] = a + b;
})
console.log(combine);
// => 15