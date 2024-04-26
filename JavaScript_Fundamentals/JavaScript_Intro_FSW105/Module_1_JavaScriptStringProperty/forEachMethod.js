// // capitalize the first letter in each word of a sentence
var str3 = "How are you";
var text = str3.split(" ");
var greeting = [];
text.forEach(function(indexElement, index, array){
        indexElement = indexElement.charAt(0).toLocaleUpperCase() + indexElement.slice(1);
        greeting+=indexElement;
        greeting+=" ";
    })
console.log(greeting.toString());



// trim() method____________