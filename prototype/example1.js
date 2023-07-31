/**
 * Use the Prototype pattern when your code shouldn’t depend on the concrete classes of objects that you need to copy.
 * */
// before prototype:
// 3rd-party code providing different concrete classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Your code receives objects from 3rd-party code
const originalPerson = new Person("John Doe", 30);
const originalProduct = new Product("Widget", 19.99);

// Your code needs to create copies of these objects
// However, you don't want to depend on the concrete classes Person and Product
// So you might need to check the type of each object and create copies accordingly
function createCopy(obj) {
  if (obj instanceof Person) {
    return new Person(obj.name, obj.age);
  } else if (obj instanceof Product) {
    return new Product(obj.name, obj.price);
  } else {
    // Handle unknown types
    return null;
  }
}

const copiedPerson = createCopy(originalPerson);
const copiedProduct = createCopy(originalProduct);




// after implementation of prototype
// Cloning interface (Prototype)
class Clonable {
  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
}

// Concrete classes provided by 3rd-party code
class Person extends Clonable {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }
}

class Product extends Clonable {
  constructor(name, price) {
    super();
    this.name = name;
    this.price = price;
  }
}

// Your code receives objects from 3rd-party code
const originalPerson = new Person("John Doe", 30);
const originalProduct = new Product("Widget", 19.99);

// Your code can create copies of these objects without checking their concrete classes
function createCopy(obj) {
  return obj.clone();
}

const copiedPerson = createCopy(originalPerson);
const copiedProduct = createCopy(originalProduct);
