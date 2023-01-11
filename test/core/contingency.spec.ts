import { expect } from "chai";
import { Contingency } from "../../src/core/contingency";
import { Register } from "../../src/core/register";
import { int } from './../../src/generators/math/number'

describe('Contingency Funciton Test', () => {
    it('Should set a boolean contingent to a persons age', () => {

        const person = { age: 19 };

        const analytis = {
            track: Contingency<boolean, typeof person>(person, () => {
                return person.age >= 18 ? true : false;
            })
        }

        const people = {
            person,
            analytis,
        };

        const register2 = new Register(people);
        const peopleResult = register2.build();

        expect(peopleResult).to.be.deep.equal({
            person: { age: 19 }, analytis: { track: true }
        });
    });

    it('Should set a boolean contingent to a persons age', () => {

        const person = { age: 17 };

        const analytis = {
            track: Contingency<boolean, typeof person>(person, () => {
                return person.age >= 18 ? true : false;
            })
        }

        const people = {
            person,
            analytis,
        };

        const register2 = new Register(people);
        const peopleResult = register2.build();

        expect(peopleResult).to.be.deep.equal({
            person: { age: 17 }, analytis: { track: false }
        });
    });

    it('Should be contingent to another generated value further up the chain', () => {
        // create the analytics register
        const analytics = {
            id: int
        }
        const analyticsRegister = new Register(analytics);
        expect(typeof analyticsRegister.build().id).to.be.equal('number');

        // create the person register
        const person = {
            age: int,
            analytics: analytics
        };

        const personRegister = new Register(person);
        expect(typeof personRegister.build().age).to.be.equal('number');
    });
});
