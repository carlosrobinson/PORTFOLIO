
var numbers = [12,4,56,27];

var results = numbers.filter((item, index, arr) => {return item >= 25
});// => [56, 27]
console.log(results);


var persons = [
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
const newPersons = [];
const userName = persons.map(user => {return newPersons.push({name: user.name.charAt(0).toLocaleUpperCase() + user.name.slice(1), age: user.age})});
// console.log(newUsers);
const isOldEnough = newPersons.filter(person => person.age >= 17);
console.log(isOldEnough);
