//Optional nullable properties 
// String interpolation
function printName(obj: { first: string; last?: string }) {
    console.log(`${obj.first}, ${obj.last.toUpperCase()}`); // Object might be null
  }
  // Both OK
  printName({ first: "Bob" });
  printName({ first: "Alice", last: "Alisson" });