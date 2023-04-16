import { Person, Number } from '@fauxjs/faux.js';

const person = {
    name: Person.firstName(),
    sirname: Person.lastName(),
    age: Number.int({min: 18, max: 65})
};

console.log(person); // { name: 'Julissa', sirname: 'Benton', age: 59 }