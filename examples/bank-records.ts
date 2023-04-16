import { Person, Number, Address, Authentication } from '@fauxjs/faux.js';

const person = {
    name: Person.firstName(),
    sirname: Person.lastName(),
    age: Number.int({min: 18, max: 65}),
    address: Address.address()
};

// TODO update with seeded UUID 
const bankAccountId = Authentication.token(36);

const bankAccountInfo = {
    id: bankAccountId,
    accountNumber: '',
    sortcode: '',
}

const creditCardDetails = {
    bankAccountId: bankAccountId
}