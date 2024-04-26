// Math.floor() method
var str1 = 'Hello';
var str2 = 'World';
var str3 = "How are you";

var roundedDown = function(str){
    return Math.floor((str.length / 2) - ((str.length / 2)%2)) ;
}
console.log(roundedDown(str1));