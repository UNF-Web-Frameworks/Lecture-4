// You can declare your own types by creating a type alias and use this alias throughout the application.
type ID = number | string;

let myID:ID=3;
let myIDS:ID='test';
let myIDB:ID=false; // <-- Complains because false is a boolean and ID (type alias) expects only a number or a string via Union typing.
