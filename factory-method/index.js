class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getDescription() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model);
  }

  // Car-specific methods and properties
  // ...
}

class Bike extends Vehicle {
  constructor(make, model) {
    super(make, model);
  }

  // Bike-specific methods and properties
  // ...
}

class VehicleFactory {
  createVehicle(type, make, model) {
    switch (type) {
      case "car":
        return new Car(make, model);
      case "bike":
        return new Bike(make, model);
      default:
        throw new Error("Invalid vehicle type.");
    }
  }
}
