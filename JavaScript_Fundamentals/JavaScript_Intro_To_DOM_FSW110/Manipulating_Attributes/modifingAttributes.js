// create an element and set an attribute to that element
var newATag = document.createElement("a");
newATag.textContent= "Setting the Attributes of Elements in the DOM."
// setAttribute <----------\|/
newATag.setAttribute("href", "https://www.w3schools.com/jsref/met_element_setattribute.asp");
document.body.append(newATag);

// create element with text
var NewH1 = document.createElement("h1");
NewH1.textContent = "Setting text Attribute To another Element from an Element"
NewH1.id = "header-id";
NewH1.className= "header-class";
document.body.append(NewH1);


// create element that gets text from another element attribute property
var NewPTag = document.createElement("p");
NewPTag.id = "p-id";
document.body.append(NewPTag);
const element = document.getElementById("header-id");
// getAttribute <----------\|/
let text = element.getAttribute("class");
document.getElementById("p-id").innerHTML = text;


