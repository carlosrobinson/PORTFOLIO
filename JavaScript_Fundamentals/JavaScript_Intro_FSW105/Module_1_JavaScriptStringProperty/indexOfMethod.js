// indexOf() method____________
// ************first example*****************************
// finds the index of sub-string
// var index = str.indexOf(substr, [, fromIndex]) the second param can 
// be ommitted and will default to position 0.
var str5 = 'Finding substring in string';
var index = str5.indexOf('str')
console.log("The first occurrences of the substring is: " + index);
// ***************second example**********************************
// count the number of occurrences with indexOf()____________
var str6 = 'You do not know what yu do not know, until you know';
var subStr = 'know';
var count = 0;
var index = str6.indexOf(subStr);
while(index !== -1){
    count++;
    index = str6.indexOf(subStr, index +1);
}
console.log("The number of occurrences is: " + count);
// ***************third example**********************************
// To perform a non-case-insensitive search____________
var subStr = 'Do';
var index = str6.toLocaleLowerCase().indexOf(subStr.toLocaleLowerCase());
console.log('When the non-case-insensitive search is found you get: ' + index);