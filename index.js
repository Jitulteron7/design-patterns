import Counter from "./singleton-patterns/singleton-patterns";
function main() {
  console.log(Counter.getCount());
  Counter.increament();
  Counter.increament();
  console.log(Counter.getCount());
  Counter.decrement();
  console.log(Counter.getCount());
}

main();
