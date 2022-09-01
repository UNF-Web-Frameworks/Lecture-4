/*
You can have nullable properties in typescript denoted by adding a ? after the variable name
typescript knows these properties might be null and so it complains if you try to use them
before first doing a null check on them
*/
function printName(obj: { first: string; last?: string }) {
    console.log(`${obj.first}, ${obj.last.toUpperCase()}`); // <-- Complains because Object might be null
    if(obj.last!==undefined)
    {
      console.log(`${obj.first}, ${obj.last.toUpperCase()}`); // <-- No onger complains because TypeScript sees we checked for existance in line 8
    }
  }

  // Both OK even though the first call skips passing the "last" parameter, it is nullable so it is all okay.
  printName({ first: "Bob" });
  printName({ first: "Alice", last: "Alisson" });