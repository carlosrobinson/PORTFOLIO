// Parent Object
class Vehicle{
    constructor(make, model, year){
        this.make=make;
        this.model=model;
        this.year=year;
    }
    accelarate(){
            console.log("moving");
    }


}

// Inherited object
class Car extends Vehicle{
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors=doors;
    }

}

// add a property to the Vehicle Constructor 
Vehicle.prototype.sunroof = true;
Vehicle.prototype.price;

// Create a Vehicle Object
function displayVehicle(vehicle){
    console.log(
        "{ \n" + 
            "  Make: " + vehicle.make + ", \n" + 
            "  Model: " + vehicle.model + ", \n" + 
            "  Year: " + vehicle.year + ", \n" + 
            "  Doors: " + vehicle.doors + ", \n" +
            "  Addon: " + vehicle.sunroof + ", \n" +
            "  Price: " + vehicle.price + "\n" +
        "}"
    );
}

Vehicle.prototype.newPrice = function() {
    this.price = 20 + ",000" ;
}

// Instantiate an Object
let toyota = new Car("Toyota", "Camry", 2024, 4);

// Call object and use methods and properties
toyota.accelarate();
console.log(toyota.price = 25000);
toyota.newPrice();
displayVehicle(toyota);
