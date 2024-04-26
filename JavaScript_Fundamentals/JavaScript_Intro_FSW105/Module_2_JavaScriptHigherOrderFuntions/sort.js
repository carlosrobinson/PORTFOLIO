var scores = [12,98,34,85,3,24,7,77,5];
// low to high
var sortedLowToHigh = scores.sort((a, b) =>{return a-b;});
console.log("Low to High: " + sortedLowToHigh);


// high to low
var sortedHighToLow = scores.sort(function(a,b){
    return b - a
})
console.log("High to Low: " + sortedHighToLow);