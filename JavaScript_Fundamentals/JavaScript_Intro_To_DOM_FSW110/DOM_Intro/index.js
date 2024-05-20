
//Appended H1 Element//
const byId = document.getElementById("parent");



//Apended Div Element to the DOM//
/*var byId = document.createElement("div");
byId.id = "parent-div";
document.body.append(byId);
*/

var newHead = document.createElement("h1")
newHead.textContent = "Creating and Accessing Elements in the DOM"
byId.append(newHead)

var newBox1 = document.createElement("input")
byId.append(newBox1); 

var newButton1 = document.createElement("button")
newButton1.id = "button1";
newButton1.textContent = "Parent Object"
byId.append(newButton1);

var newBox2 = document.createElement("input")
byId.append(newBox2);

var newButton2 = document.createElement("button")
newButton2.id = "button2";
newButton2.textContent = "Child Objects"
byId.append(newButton2);



// Appended Element to the DOM
var newElement = document.createElement("div")
document.body.append(newElement)


            // Create a function that creates and appends an element

var el1 = "element-"
var count1 = 1;

var el2 = "child-"
var count2 = 1;

var elName1 = el1+count1;
var elName2 = el2+count2;

// Creates any element
function createEle(element){
    // represents child element name
    elName1 = el1+count1;
    // creates element
    elName1 = document.createElement(element);
    elName1.textContent = "This "  + element  +" Element is a "  + elName1 + " \nand it's id is: " + el1+count1;
    elName1.id = el1+count1;
    // increments counter1
    count1++;
    return newElement.appendChild(elName1) ;
}


// Event listener
newButton1.addEventListener("click", function(){
    createEle(newBox1.value.toString())
});

newButton2.addEventListener("click", function(){
    createChildEle(newBox2.value.toString())
});

// creates any child element
function createChildEle(element){
    // gets the current parents ID
     var parentEl = document.getElementById(elName1.id);
     // represents child element name
     elName2 = el2+count2;
     //creates child element
     elName2 = document.createElement(element)
     elName2.textContent = "This "  + element  + " Element is a child object "  +  " and it is an: " + elName2 + "  and it's id is: " + el2+count2;
     elName2.id = el2+count2;
     // increments counter2
     count2++;
     return parentEl.appendChild(elName2);
}

