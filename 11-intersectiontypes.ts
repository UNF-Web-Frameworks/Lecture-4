/* Intersection types are similar to Union types with the difference that both types must be honored 
while Union types it is one or the other, for an intersection type the object must abide by the rules of both types
*/

interface Colorful {
    color: string;
  }
  interface Circle {
    radius: number;
  }
   
  type ColorfulCircle = Colorful & Circle;

  function draw(circle: Colorful & Circle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
  }
   
  // okay
  draw({ color: "blue", radius: 42 });
   
  // oops
  draw({ color: "red", raidus: 42 }); // Mispelled second term doesn't abide by Circle.