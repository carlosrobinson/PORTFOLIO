// Constructor
function Vehical(make, model, year, type){
    this.make=make;
    this,model=model;
    this.year=year;
    this.type=type;
};
// prototype
Vehical.prototype.typeOfVehicle = function(){
    console.log("The type of vehicle is a " + this.type);
};
let toyota = new Vehical("Toyota", "Camry", 2024, "small car." );
console.log(Vehical.prototype);
console.log(toyota);
toyota.typeOfVehicle();