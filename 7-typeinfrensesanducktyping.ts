// Duck Type Checking 
/* The old phrase if it looks like a duck and walks like a duck must be a duck applies to typescript
two distinct objects if they have the same members and members type are essentially the same type

All three objects below are interchangable with eachtoher.
*/

interface Point {
    x: number;
    y: number;
  }
   
  function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
  }
   
  // logs "12, 26"
  const point = { x: 12, y: 26 };
  logPoint(point);


  class VirtualPoint {
    x: number;
    y: number;
   
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }
   
  const newVPoint = new VirtualPoint(13, 56);
  logPoint(newVPoint); // logs "13, 56"