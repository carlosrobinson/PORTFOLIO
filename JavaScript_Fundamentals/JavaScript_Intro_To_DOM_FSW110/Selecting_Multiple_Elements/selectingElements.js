// Select a single element from the page - returns an object
// document.getElementById("parent");
const parent = document.querySelector("#parent");


// Select multiple elements - returns an array
const children = document.querySelectorAll("ul#favorite-things > li");
const animals = ["dog", "cat", "mouse", "bird"]
for(var i = 0; i < children.length; i++){
    children[i].textContent = animals[i]
}
// children.item(1);
console.log(Array.from(children));