function example(x: string | number, y: string | boolean) {
    if (x === y) {
      // We can now call any 'string' method on 'x' or 'y'.
      x.toUpperCase();
            
  //(method) String.toUpperCase(): string
      y.toLowerCase();
            
  //(method) String.toLowerCase(): string
    } else {
      console.log(x);
                 
  //(parameter) x: string | number
      console.log(y);
                 
  //(parameter) y: string | boolean
    }
  }

/*
When we checked that x and y are both equal in the above example, TypeScript knew their types also had to be equal. 
Since string is the only common type that both x and y could take on, TypeScript knows that x and y must be a string in the first branch.
*/