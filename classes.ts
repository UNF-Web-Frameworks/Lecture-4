class Point {} // Basic Empty Class


class Point {
    x: number;
    y: number;
  }
   
  const pt = new Point();
  pt.x = 0;
  pt.y = 0;


  // Require Initialization
  class GoodGreeter {
    name: string;
   
    /*constructor() {
        this.name = "hello";
      }*/
  }


// Read only
  class Greeter {
    readonly name: string = "world";
   
    constructor(otherName?: string) {
      if (otherName !== undefined) {
        this.name = otherName;
      }
    }
   
    err() {
      this.name = "not ok";
    }
  }
  const g = new Greeter();
  g.name = "also not ok";


  //Constructor with Defaults

  class Point {
    x: number;
    y: number;
   
    // Normal signature with defaults
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  }


 // Super Calls (Inehritance)
  class Base {
    k = 4;
  }
   
  class Derived extends Base {
    constructor() {
      // Prints a wrong value in ES5; throws exception in ES6
      console.log(this.k);
  
      super();
    }
  }


  // Public Methods
  class Point {
    x = 10;
    y = 10;
   
    scale(n: number): void {
      this.x *= n;
      this.y *= n;
    }
  }



  //Access All Class Variables via THIS
  let x: number = 0;
 
class C {
  x: string = "hello";
 
  m() {
    // This is trying to modify 'x' from line 1, not the class property
    x = "world"; //this

  }
}


// Accessors (Encapsulation)

class C {
    _length = 0;
    get length() {
      return this._length;
    }
    set length(value) {
      this._length = value;
    }
  }


  // Polymorphism
  interface Pingable {
    ping(): void;
  }
   
  class Sonar implements Pingable {
    ping() {
      console.log("ping!");
    }
  }
   
  class Ball implements Pingable {
  
    pong() {
      console.log("pong!");
    }
  }


  // Static Memebers (not static classes)
  class MyClass {
    static x = 0;
    static printX() {
      console.log(MyClass.x);
    }
  }
  console.log(MyClass.x);
  MyClass.printX();