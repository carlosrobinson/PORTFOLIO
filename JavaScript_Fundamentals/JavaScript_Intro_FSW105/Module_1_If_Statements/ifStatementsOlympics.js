// Preliminaries:

    // is greater
    // if(5 > 3){
    //     console.log("Yes IS GREATER THAN")
    // }
    // else {
    //     console.log("No IS NOT GREATER THAN")
    // }
    // ternary
    var isGreater = (5 > 3) ? "IS GREATER THAN": "IS NOT GREATER THAN";
    console.log(isGreater);


    // length is
    var animal = "cat"
    // if(animal.length === 3){
    //     console.log("IS THE LENGTH")
    // }
    // else{
    //     console.log("NOPE IT'S NOT THE LENGTH" )
    // }
    // ternary
    var  lenghtIs = (animal.length === 3) ? "IS THE LENGTH": "NOPE IT'S NOT THE LENGTH";
    console.log(lenghtIs)

    
    // animals are equal
    // if("dog" === "cat"){
    //     console.log("THEY ARE THE SAME")
    // }
    // else{
    //     console.log("NOT THE SAME" )
    // }
    // ternary
    var animalsAreEqual = ("dog" === "cat") ? "THEY ARE THE SAME" : "NOT THE SAME";
    console.log(animalsAreEqual)


    var person = {
        name: "Prain",
        age: 7

    }


    // is old enough
    // if(person.age >= 18 ){
    //     console.log("YOU MAY ENTER")

    // }else{
    //     console.log("1. YOU DO NOT MEET THE REQUIREMENTS")
    // }
    // ternary
    var IsOldEnough = (person.age >= 18) ? "YOU MAY ENTER": "1. YOU DO NOT MEET THE REQUIREMENTS";


    // starts with "B"
    // if(person.name.startsWith('B')){
    //     console.log("YOU MAY ENTER")
    // }else{
    //     console.log("2. YOU DO NOT MEET THE REQUIREMENTS")
    // }
    // ternary
    var startsWithB = (person.name.startsWith('B')) ? "YOU MAY ENTER": "3. YOU DO NOT MEET THE REQUIREMENTS";
    console.log(startsWithB);



    // is old enough and starts with "B"
    // if(person.age >= 18 && person.name.startsWith('B')){
    //         console.log("YOU MAY ENTER")

    // }else{
    //         console.log("4. YOU DO NOT MEET THE REQUIREMENTS")
        
    // }
    // ternary
    var isOldEnoughAndStartsWithB = (person.age >= 18 && person.name.startsWith('B')) ? "YOU MAY ENTER":
                                    "4. YOU DO NOT MEET THE REQUIREMENTS";
    console.log(isOldEnoughAndStartsWithB);



    // Silver Medal:

    // equals how
    // if(1 === 1){
    //     console.log("strict")
    // }else if(1 == 1){
    //     console.log("loose");
    // }
    // else{
    //     console.log("not equal at all")
    // }
    // ternary
    var equalsHow = (1 !== 1) ? "strict": (1 != 1) ? "loose": "not equal at all";
    console.log(equalsHow);


    // GOLD Medal

    var myNumber = 11;
    var evenOrOdd = (myNumber % 2 === 0) ? "IS EVEN": "IS ODD";
    console.log(evenOrOdd);