// var output = document.querySelector("#output");

var add = document.getElementById("button-add");
var a = document.querySelector("#firstInput-add");
var b = document.querySelector("#secondInput-add");

var subtract = document.querySelector("#button-subtract");
var c = document.querySelector("#firstInput-subtract");
var d = document.querySelector("#secondInput-subtract");

var multiply = document.querySelector("#button-multiply");
var e = document.querySelector("#firstInput-multiply");
var f = document.querySelector("#secondInput-multiply");

// var calculator = document.querySelector("#calculator");


// event listeners
add.addEventListener("click", function(){
    var total = parseInt(a.value) + parseInt(b.value)
    document.getElementById("output").innerHTML = total;
});

subtract.addEventListener("click", function(){
    var total = parseInt(c.value) - parseInt(d.value)
    document.getElementById("output").innerHTML = total;
});

multiply.addEventListener("click", function(){
    var total = parseInt(e.value) * parseInt(f.value)
    document.getElementById("output").innerHTML = total;
});