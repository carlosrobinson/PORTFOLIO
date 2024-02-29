var person = {
    firstName: "John",
    lastName: "Doe",
    location: "USA",
    birthDate: "1920",
    family: ["Jane", "Chris", "Brent", "Matty"],
    displayInfo: function(){                                                                    // The "this keyword can also be used insead of Object name"
        console.log(`${person.firstName} ${person.lastName} was born in ${person.birthDate} and ${this.family[0] } is his wife \nand they live at ${person.address.street}\n`)
    },
    address: {
        'street': "206 Flanders St. Apt 5",
        city: "Dublin",
        state: "GA",
        zip: 31021
    }, 
    hasVoted: true
}
person.displayInfo();
// dot (.) notation
console.log("Dot notation: " + person.address.street)
// Array-like notation
console.log("Array-like notation: " + person.address["street"])