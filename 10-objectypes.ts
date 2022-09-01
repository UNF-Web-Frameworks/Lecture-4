// Annonymoys 
function greet(person: { name: string; age: number })
{
    return "Hello " + person.name;
}

//Interface driven
interface Person
{
    name: string;
    age: number;
}

function greet(person: Person)
{
    return "Hello " + person.name;
}

//Type Aliased
type Person = {
    name: string;
    age: number;
};

function greet(person: Person)
{
    return "Hello " + person.name;
}


