var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];
var count = 0;

// function office(args){
//     for(var i = 0; i < args.length; i++){
//         if(args[i] === "computer"){
//             count++ ;
//         }
//     }
//     return count;
// };

// console.log(office(officeItems));

var peopleWhoWannaSeeColorPurple = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },
    {
        name: "Madeline",
        age: 80,
        gender: "female"
    },
    {
        name: "Cheryl",
        age: 22,
        gender: "female"
    },     {
        name: "Sam",
        age: 30,
        gender: "male"
    },
    {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]

var results = function(args){
    for(var i = 0; i < args.length; i++){
        if(args[i].age >= 18 && args[i].gender === "male"){
            console.log(args[i].name + " is old enough to see Mad Max. Let HIM in")
        }else if(args[i].age >= 18 && args[i].gender === "female"){
            console.log(args[i].name + " is old enough to see Mad Max. SHE's good")
        }
        else if(args[i].age < 18 && args[i].gender === "male"){
            console.log(args[i].name + " is not old enough to see Mad Max. Don let HIM in")
        }else if(args[i].age < 18 && args[i].gender === "female"){
            console.log(args[i].name + " is not old enough to see Mad Max. SHE's not allowed in")
        }else{
            console.log()
        }
    }
}
// results(peopleWhoWannaSeeColorPurple);


var arr1 = [2,5,453,4,3];
var arr2 = [1,1,1,1,3];
var arr3 = [9,3,4,2]

function myArr(args){
    var light;
    var toggle = 0;
    for(var i =0; i<args.length; i++){
        toggle+=args[i];
    }
    if(toggle % 2 === 0){
        console.log(light = "the light is off");
    }else{
        console.log(light = "the light is on");
    }
    return light;
}
myArr(arr1);
myArr(arr2);
myArr(arr3);

