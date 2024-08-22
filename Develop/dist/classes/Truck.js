// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        super();
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        if (wheels.length !== 4) {
            this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
        }
        else {
            this.wheels = wheels;
        }
        this.towingCapacity = towingCapacity;
    }
    // Implement the tow method from the AbleToTow interface
    tow(vehicle) {
        if (vehicle) {
            const make = vehicle.make;
            const model = vehicle.model;
            if (vehicle.weight <= this.towingCapacity) {
                console.log(`Towing ${make} ${model}`);
            }
            else {
                console.log(`Vehicle is too heavy to be towed`);
            }
        }
        else {
            console.log(`Vehicle does not exist`);
        }
    }
    printDetails() {
        super.printDetails();
        console.log(`VIN: ${this.vin}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} lbs`);
        console.log(`Top Speed: ${this.topSpeed} mph`);
        console.log(`Color: ${this.color}`);
        console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
        console.log(`Wheels:`);
        for (let i = 0; i < this.wheels.length; i++) {
            console.log(`Wheel ${i + 1}: ${this.wheels[i].getDiameter} inch with a ${this.wheels[i].getTireBrand} tire`);
        }
    }
}
// Export the Truck class as the default export
export default Truck;
