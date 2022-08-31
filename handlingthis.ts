class MyClass2 {
    name = "MyClass";
    getName() {
      return this.name;
    }
  }
  const c = new MyClass2();
  const obj = {
    name: "obj",
    getName: c.getName,
  };
   
  // Prints "obj", not "MyClass"
  console.log(obj.getName());


  /*
  Long story short, by default, the value of this inside a function depends on how the function was called. In this 
  example, because the function was called through the obj reference, its value of this was obj rather than the class instance.
  
  This is rarely what you want to happen! TypeScript provides some ways to mitigate or prevent this kind of error.
  If you have a function that will often be called in a way that loses its this context, it can make sense to use an arrow function 
  property instead of a method definition:


  */


  class MyClass3 {
    name = "MyClass";
    getName = () => {
      return this.name;
    };
  }
  const c2 = new MyClass3();
  const g2 = c.getName;
  // Prints "MyClass" instead of crashing
  console.log(g2());

  /*

  This has some trade-offs:

    The this value is guaranteed to be correct at runtime, even for code not checked with TypeScript
    This will use more memory, because each class instance will have its own copy of each function defined this way
    You can’t use super.getName in a derived class, because there’s no entry in the prototype chain to fetch the
    base class method from
*/