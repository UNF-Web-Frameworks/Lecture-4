/*
This function takes a string and a date,
when invoked in line 11 we pass in Date() which returns a string
typescript checks the type returned by Date() and raises an error 
because Date() is not the same as a new Date()
*/
function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
   
  greet("Maddison", Date());  // Fix new Date() <-- returns an actual date while Date() returns a string.

