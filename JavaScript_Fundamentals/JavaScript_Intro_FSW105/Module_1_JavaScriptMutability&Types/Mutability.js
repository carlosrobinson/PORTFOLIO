// Mutability and Types


// Immutable - Cannot be changed => Passed by value
    // String
    // Numbers
    // Booleans

// Mutable - Containers  => Passed by Reference
    // Array
    // Object
    
    var arr = [1, 2, 3, 4, 5]
    
    var person = {
        name: "harry",
        age: 12
    }

    person.hasWand = true
    delete person.hasWand
    
    console.log(person)



// typeof - returns the type of the data immediately to its right
console.log( typeof person )