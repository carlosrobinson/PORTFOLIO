var input = document.createElement("input")
document.append(input); 


var button = document.createElement("button")
button.id = "button1";
button.textContent = "Parent Object"
document.append(button);
/*const getButton = ()=>{
    return input;
}*/
export function getInput(){
    return input;
}
// module.exports = getInput();