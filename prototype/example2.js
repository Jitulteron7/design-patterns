/**
 *
 */

// befoer prototype
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    // Complex initialization process with many configuration steps
    this.configure();
  }

  configure() {
    // Some complex configuration steps based on car make and model
    console.log(`Configuring ${this.make} ${this.model}`);
    // ...
  }
}

// Subclasses for different car makes and models
class HondaCivic extends Car {
  constructor() {
    super("Honda", "Civic");
  }
}

class ToyotaCamry extends Car {
  constructor() {
    super("Toyota", "Camry");
  }
}

class BMWX5 extends Car {
  constructor() {
    super("BMW", "X5");
  }
}

// Using the classes
const hondaCivic = new HondaCivic();
const toyotaCamry = new ToyotaCamry();
const bmwX5 = new BMWX5();
// after prottype
// Base Car class with a complex initialization process
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    // Complex initialization process with many configuration steps
    this.configure();
  }

  configure() {
    // Some complex configuration steps based on car make and model
    console.log(`Configuring ${this.make} ${this.model}`);
    // ...
  }

  // Prototype method to clone the car instance
  clone() {
    return new Car(this.make, this.model);
  }
}

// Using the Prototype pattern to create car instances
const hondaPrototype = new Car("Honda", "Civic");
const toyotaPrototype = new Car("Toyota", "Camry");
const bmwPrototype = new Car("BMW", "X5");

// Cloning the prototypes to create new car instances
const hondaCivic = hondaPrototype.clone();
const toyotaCamry = toyotaPrototype.clone();
const bmwX5 = bmwPrototype.clone();
