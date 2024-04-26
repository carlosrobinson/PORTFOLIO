var person = {
    firstName: "John0",
    lastName: "Doe",
    location: "USA",
    birthDate: "1920",
    family: ["Jane", "Chris", "Brent", "Matty"],
    voteCheer: "I just voted!!!",
    displayInfo: function(){                                                                    // The "this keyword can also be used insead of Object name"
        console.log(`${person.firstName} ${person.lastName} was born in ${person.birthDate} and ${this.family[0] } is his wife \nand they live at ${person.address.street}\n`)
    },
    voted: function(){
        // return - stops the code after execution when used instead of console logging.S
        return this.voteCheer;
    },
    address: {
        'street': "206 Flanders St. Apt 5",
        city: "Dublin",
        state: "GA",
        zip: 31021
    }, 
    hasVoted: true
}

// we can add a property also using bracet or dot notation
console.log("bracet or dot notation\n");
person.isRegistered = true;
console.log(person);
console.log(person.voted());

// pass by reference
console.log("\npass by reference\n");
var otherPerson = person
otherPerson.hasVoted = false;
console.log(person);

// person.displayInfo();
// dot (.) notation
// console.log("Dot notation: " + person.address.street)
// Array-like notation
// console.log("Array-like notation: " + person.address["street"])


// Exercise:
// Create an object with one of each data type including at least 1 method.
// Call the method to make it execute.
    // The method must use the keyword "this" to reference some part of the object.
    