// navbar
const myNav = document.createElement("nav");
const home = document.createElement("a");
const contact = document.createElement("a");
const about = document.createElement("a");
const tagList = [home, contact, about];
const list = ["home", "contact", "about"];
for(var i = 0; i<tagList.length; i++){
    tagList[i].href = list[i];
    tagList[i].textContent = list[i];
    myNav.append(tagList[i]);  
}
myNav.style.display = "flex";
myNav.style.margin ="20px";
myNav.style.justifyContent = "space-between";


// header
const myHeader = document.createElement("h1");
myHeader.textContent = "This Is My Header";
myHeader.style.textAlign = "center";


// paragraph
const myParagraph = document.createElement("p");
myParagraph.textContent = "This Is My Paragraph";
myParagraph.style.textAlign= "center";


// list
const myList = document.createElement("ul");
myList.textContent = "This Is My Unordered List";
const myLi1 = document.createElement("li");
const myLi2 = document.createElement("li");
const myLi3 = document.createElement("li");
const myLi4 = document.createElement("li");
const unorderedList = [myLi1, myLi2, myLi3, myLi4];
const liList = ["Text 1", "Text 2", "Text 3", "Text 4"];
for(var i = 0; i<unorderedList.length; i++){
    unorderedList[i].href = list[i];
    unorderedList[i].textContent = liList[i];
    myList.append(unorderedList[i]);  
}
myList.style.margin = "100px";


// footer
const myFooter = document.createElement("footer");
myFooter.textContent = "This Is my Footer";
myFooter.style.textAlign = "center";


document.body.append(myNav);
document.body.append(myHeader);
document.body.append(myParagraph);
document.body.append(myList);
document.body.append(myFooter);
