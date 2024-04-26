var arr = [1, 2, 3, 4, 5];
var i = 0;
// Use newArr if your going to just make a copy of the arr.
// var newArr = []
arr.map(function(item){
        arr[i] = item + 1;
        i++;
        })


const result = arr.map(item =>item + 1)
console.log(result);


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

    const userName = person.map(user => user.name.charAt(0).toLocaleUpperCase() + user.name.slice(1));
    console.log(userName);