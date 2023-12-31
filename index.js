// import Counter from "./singleton-patterns/singleton-patterns";
// function main() {
//   console.log(Counter.getCount());
//   Counter.increament();
//   Counter.increament();
//   console.log(Counter.getCount());
//   Counter.decrement();
//   console.log(Counter.getCount());
// }

// main();

class A {
  constructor(name, obj) {
    this.name = name;
    this.obj = obj;
  }

  clone() {
    const clone = Object.create(this);
    console.log("clone:", clone);
    clone.obj = Object.create(this.obj);
    return clone;
  }
}

let o = {
  age: "10",
  sub: "cs",
};
let x = new A("jitul", o);
let y = x.clone();
console.log(x);
console.log(y);
//when y =x true when y =x.clone false why ?
if (y.obj == x.obj) {
  console.log("true");
}
