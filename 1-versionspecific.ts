//ES3 old //ES6 (new)
/*
    This function compiles differently if you compile for ES3 vs ES2020
*/
function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}