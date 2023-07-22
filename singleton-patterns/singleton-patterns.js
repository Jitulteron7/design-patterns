let counter = 0;
let instance;

export class Counter {
  constructor() {
    if (instance !== null && instance !== undefined) {
      throw new Error("Cannot create instance");
    }

    instance = this;
  }
  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increament() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
