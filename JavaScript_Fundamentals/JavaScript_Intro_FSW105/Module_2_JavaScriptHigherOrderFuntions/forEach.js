var numbers = [1,2,3,4]

numbers.forEach(function(item, i, arr){
    return arr[i] = item * 2
})// => [2,4,6,8]
console.log(numbers);
